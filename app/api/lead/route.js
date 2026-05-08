import { NextResponse } from "next/server";

const REQUIRED_FIELDS = ["name", "mobile", "email"];

export async function POST(request) {
  try {
    const appsScriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL;

    if (!appsScriptUrl) {
      return NextResponse.json(
        { ok: false, error: "GOOGLE_APPS_SCRIPT_URL is not configured." },
        { status: 500 }
      );
    }

    const body = await request.json();
    const lead = {
      name: String(body.name || "").trim(),
      mobile: String(body.mobile || "").trim(),
      email: String(body.email || "").trim(),
    };

    const missingField = REQUIRED_FIELDS.find((field) => !lead[field]);

    if (missingField) {
      return NextResponse.json(
        { ok: false, error: `${missingField} is required.` },
        { status: 400 }
      );
    }

    const response = await fetch(appsScriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(lead),
      cache: "no-store",
    });

    const text = await response.text();
    let result = {};

    try {
      result = JSON.parse(text);
    } catch {
      result = { raw: text };
    }

    if (!response.ok || result.ok === false) {
      return NextResponse.json(
        { ok: false, error: result.error || "Google Apps Script rejected the inquiry." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: error.message || "Unable to submit inquiry." },
      { status: 500 }
    );
  }
}
