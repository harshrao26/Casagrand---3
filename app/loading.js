import Image from "next/image";
import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex min-h-screen items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-5">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-[#9b741f]/20 blur-2xl" />

          <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-[#9b741f]/20 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
            <Image
              src="/logo.png"
              alt="Loading"
              width={72}
              height={72}
              priority
              className="h-16 w-16 object-contain"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Loader2 className="h-5 w-5 animate-spin text-[#9b741f]" />
          <span className="text-xs font-semibold uppercase tracking-[4px] text-zinc-500">
            Loading
          </span>
        </div>
      </div>
    </div>
  );
}