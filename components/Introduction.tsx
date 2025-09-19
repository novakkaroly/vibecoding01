
import React from 'react';

const Introduction: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold text-slate-800 mb-4 text-center">Mi is az a Vibe Coding?</h2>
      <p className="text-lg text-slate-600 mb-6">
        A "Vibe Coding" egy kreatív koncepció, amely a programozás és az AI-val való interakció egy új, emberközelibb módját jelenti. Ahelyett, hogy szigorú szintaktikai szabályokra és bonyolult algoritmusokra koncentrálnánk, a hangsúly az ötleten, az érzésen és a "hangulaton" (vibe) van. A diákok természetes nyelven, leíró módon fogalmazzák meg, mit szeretnének létrehozni, az AI pedig segít ezt megvalósítani.
      </p>
      <div className="grid md:grid-cols-2 gap-6 mt-8 text-center">
        <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
          <h3 className="text-xl font-semibold text-blue-800 mb-2">Miért hasznos?</h3>
          <p className="text-slate-700">
            Lebontja a programozással kapcsolatos korlátokat, fejleszti a kreativitást, a problémamegoldó készséget és a digitális írástudást. Bárki számára elérhetővé teszi az alkotás élményét, technikai előképzettségtől függetlenül.
          </p>
        </div>
        <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-200">
          <h3 className="text-xl font-semibold text-indigo-800 mb-2">Hogyan működik?</h3>
          <p className="text-slate-700">
            A diákok egy egyszerű szöveges leírással (prompt) adják meg az AI-nak, hogy milyen hangulatú verset, képet, történetet vagy akár egyszerű programkódot szeretnének. Az AI értelmezi a "vibe"-ot és generál egy egyedi alkotást.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
