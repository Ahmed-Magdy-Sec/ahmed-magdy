import { certifications } from "@/lib/content";

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 relative overflow-hidden bg-black text-white">
      {/* خلفية التوهج الأحمر بوضوح باستخدام inline style لتفادي أي مشاكل في Tailwind */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full pointer-events-none blur-[140px]" 
        style={{ backgroundColor: "rgba(220, 38, 38, 0.18)" }}
      />

      {/* عنوان القسم */}
      <div className="mb-14 text-center relative z-10">
        <span className="text-[#ef4444] font-mono text-xs tracking-[0.2em] uppercase block mb-3 font-semibold">
          05 / CERTIFICATIONS & AWARDS
        </span>
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
          Credentials & <span className="text-[#ef4444]">recognition.</span>
        </h2>
      </div>

      {/* شبكة الشهادات الأربع */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1400px] mx-auto px-6 relative z-10">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="group relative flex flex-col justify-between p-8 bg-[#0a0a0c] border border-[#27272a] rounded-2xl hover:border-[#ef4444] hover:bg-[#140a0c] transition-all duration-300 min-h-[380px] shadow-2xl"
          >
            {/* الجزء العلوي */}
            <div>
              {/* البادج الأحمر */}
              <div className="mb-6">
                <span className="inline-block bg-[#2e0909] text-[#ef4444] border border-[#7f1d1d] text-[11px] font-mono tracking-wider uppercase px-4 py-1.5 rounded-full font-medium">
                  {cert.type}
                </span>
              </div>

              {/* اسم الشهادة والجهة الصادرة */}
              <h3 className="text-2xl font-bold text-white mb-2 leading-snug group-hover:text-[#f87171] transition-colors">
                {cert.name}
              </h3>
              <p className="text-[#a1a1aa] font-mono text-xs uppercase tracking-widest mb-4">
                {cert.org}
              </p>

              {/* الشرح */}
              <p className="text-[#d4d4d8] text-sm leading-relaxed mb-6">
                {cert.description}
              </p>
            </div>

            {/* السنة في الأسفل */}
            <div className="pt-4 border-t border-[#27272a]">
              <span className="text-[#71717a] font-mono text-xs tracking-wider">
                {cert.year}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}