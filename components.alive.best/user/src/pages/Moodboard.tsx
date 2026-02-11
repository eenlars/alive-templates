const moodboardItems = [
  { id: 1, gradient: "from-slate-100 to-gray-200", ratio: "aspect-[3/4]", date: "10 October 2025", title: "Minimal Structure" },
  { id: 2, gradient: "from-gray-100 to-slate-200", ratio: "aspect-square", date: "11 October 2025", title: "Light Study" },
  { id: 3, gradient: "from-zinc-100 to-gray-200", ratio: "aspect-[4/3]", date: "12 October 2025", title: "Texture Detail" },
  { id: 4, gradient: "from-neutral-100 to-zinc-200", ratio: "aspect-[3/4]", date: "13 October 2025", title: "Form Exploration" },
  { id: 5, gradient: "from-stone-100 to-neutral-200", ratio: "aspect-square", date: "14 October 2025", title: "Spatial Balance" },
  { id: 6, quote: "Design is not just what it looks like and feels like. Design is how it works.", ratio: "aspect-[3/4]", title: "Quote One", date: "15 October 2025" },
  { id: 7, gradient: "from-gray-50 to-stone-200", ratio: "aspect-[4/3]", date: "16 October 2025", title: "Material Study" },
  { id: 8, gradient: "from-slate-100 to-gray-200", ratio: "aspect-[3/4]", date: "17 October 2025", title: "Shadow Play" },
  { id: 9, gradient: "from-gray-100 to-slate-200", ratio: "aspect-square", date: "18 October 2025", title: "Composition" },
  { id: 10, gradient: "from-zinc-100 to-gray-200", ratio: "aspect-[4/3]", date: "19 October 2025", title: "Abstract Form" },
  { id: 11, gradient: "from-neutral-100 to-zinc-200", ratio: "aspect-[3/4]", date: "20 October 2025", title: "Geometric Pattern" },
  { id: 12, gradient: "from-stone-100 to-neutral-200", ratio: "aspect-square", date: "21 October 2025", title: "Monochrome" },
  { id: 13, quote: "Simplicity is the ultimate sophistication.", ratio: "aspect-[4/3]", title: "Quote Two", date: "22 October 2025" },
  { id: 14, gradient: "from-gray-50 to-stone-200", ratio: "aspect-[3/4]", date: "23 October 2025", title: "Contrast Study" },
  { id: 15, gradient: "from-slate-100 to-gray-200", ratio: "aspect-square", date: "24 October 2025", title: "Negative Space" },
  { id: 16, gradient: "from-gray-100 to-slate-200", ratio: "aspect-[4/3]", date: "25 October 2025", title: "Linear Elements" },
  { id: 17, gradient: "from-zinc-100 to-gray-200", ratio: "aspect-[3/4]", date: "26 October 2025", title: "Architectural Detail" },
  { id: 18, gradient: "from-neutral-100 to-zinc-200", ratio: "aspect-square", date: "27 October 2025", title: "Organic Form" },
  { id: 19, gradient: "from-stone-100 to-neutral-200", ratio: "aspect-[4/3]", date: "28 October 2025", title: "Surface Texture" },
  { id: 20, quote: "Less is more.", ratio: "aspect-[3/4]", title: "Quote Three", date: "29 October 2025" },
  { id: 21, gradient: "from-gray-50 to-stone-200", ratio: "aspect-square", date: "30 October 2025", title: "Rhythm & Repetition" },
  { id: 22, gradient: "from-slate-100 to-gray-200", ratio: "aspect-[4/3]", date: "31 October 2025", title: "Tonal Variation" },
  { id: 23, gradient: "from-gray-100 to-slate-200", ratio: "aspect-[3/4]", date: "01 November 2025", title: "Void & Mass" },
  { id: 24, gradient: "from-zinc-100 to-gray-200", ratio: "aspect-square", date: "02 November 2025", title: "Perspective" },
  { id: 25, gradient: "from-neutral-100 to-zinc-200", ratio: "aspect-[4/3]", date: "03 November 2025", title: "Depth Study" },
  { id: 26, gradient: "from-stone-100 to-neutral-200", ratio: "aspect-[3/4]", date: "04 November 2025", title: "Subtle Gradation" },
  { id: 27, quote: "Form follows function.", ratio: "aspect-square", title: "Quote Four", date: "05 November 2025" },
  { id: 28, gradient: "from-gray-50 to-stone-200", ratio: "aspect-[4/3]", date: "06 November 2025", title: "Structural Clarity" },
  { id: 29, gradient: "from-slate-100 to-gray-200", ratio: "aspect-[3/4]", date: "07 November 2025", title: "Visual Weight" },
  { id: 30, gradient: "from-gray-100 to-slate-200", ratio: "aspect-square", date: "08 November 2025", title: "Hierarchy" },
  { id: 31, gradient: "from-zinc-100 to-gray-200", ratio: "aspect-[4/3]", date: "09 November 2025", title: "Scale Study" },
  { id: 32, gradient: "from-neutral-100 to-zinc-200", ratio: "aspect-[3/4]", date: "10 November 2025", title: "Proportion" },
  { id: 33, gradient: "from-stone-100 to-neutral-200", ratio: "aspect-square", date: "11 November 2025", title: "Balance" },
  { id: 34, quote: "Good design is obvious. Great design is transparent.", ratio: "aspect-[4/3]", title: "Quote Five", date: "12 November 2025" },
  { id: 35, gradient: "from-gray-50 to-stone-200", ratio: "aspect-[3/4]", date: "13 November 2025", title: "Interface" },
  { id: 36, gradient: "from-slate-100 to-gray-200", ratio: "aspect-square", date: "14 November 2025", title: "Connection" },
  { id: 37, gradient: "from-gray-100 to-slate-200", ratio: "aspect-[4/3]", date: "15 November 2025", title: "Transition" },
  { id: 38, gradient: "from-zinc-100 to-gray-200", ratio: "aspect-[3/4]", date: "16 November 2025", title: "Boundary" },
  { id: 39, gradient: "from-neutral-100 to-zinc-200", ratio: "aspect-square", date: "17 November 2025", title: "Edge Detail" },
  { id: 40, gradient: "from-stone-100 to-neutral-200", ratio: "aspect-[4/3]", date: "18 November 2025", title: "Corner Study" },
  { id: 41, quote: "The details are not the details. They make the design.", ratio: "aspect-[3/4]", title: "Quote Six", date: "19 November 2025" },
  { id: 42, gradient: "from-gray-50 to-stone-200", ratio: "aspect-square", date: "20 November 2025", title: "Joint" },
  { id: 43, gradient: "from-slate-100 to-gray-200", ratio: "aspect-[4/3]", date: "21 November 2025", title: "Seam" },
  { id: 44, gradient: "from-gray-100 to-slate-200", ratio: "aspect-[3/4]", date: "22 November 2025", title: "Line Quality" },
  { id: 45, gradient: "from-zinc-100 to-gray-200", ratio: "aspect-square", date: "23 November 2025", title: "Plane Study" },
  { id: 46, gradient: "from-neutral-100 to-zinc-200", ratio: "aspect-[4/3]", date: "24 November 2025", title: "Volume" },
  { id: 47, gradient: "from-stone-100 to-neutral-200", ratio: "aspect-[3/4]", date: "25 November 2025", title: "Mass Study" },
  { id: 48, quote: "Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.", ratio: "aspect-square", title: "Quote Seven", date: "26 November 2025" },
  { id: 49, gradient: "from-gray-50 to-stone-200", ratio: "aspect-[4/3]", date: "27 November 2025", title: "Reduction" },
  { id: 50, gradient: "from-slate-100 to-gray-200", ratio: "aspect-[3/4]", date: "28 November 2025", title: "Essence" },
  { id: 51, gradient: "from-gray-100 to-slate-200", ratio: "aspect-square", date: "29 November 2025", title: "Pure Form" },
  { id: 52, gradient: "from-zinc-100 to-gray-200", ratio: "aspect-[4/3]", date: "30 November 2025", title: "Clarity" },
  { id: 53, gradient: "from-neutral-100 to-zinc-200", ratio: "aspect-[3/4]", date: "01 December 2025", title: "Precision" },
  { id: 54, gradient: "from-stone-100 to-neutral-200", ratio: "aspect-square", date: "02 December 2025", title: "Refinement" },
  { id: 55, quote: "Design is thinking made visual.", ratio: "aspect-[4/3]", title: "Quote Eight", date: "03 December 2025" },
  { id: 56, gradient: "from-gray-50 to-stone-200", ratio: "aspect-[3/4]", date: "04 December 2025", title: "Concept" },
  { id: 57, gradient: "from-slate-100 to-gray-200", ratio: "aspect-square", date: "05 December 2025", title: "Idea" },
  { id: 58, gradient: "from-gray-100 to-slate-200", ratio: "aspect-[4/3]", date: "06 December 2025", title: "Expression" },
  { id: 59, gradient: "from-zinc-100 to-gray-200", ratio: "aspect-[3/4]", date: "07 December 2025", title: "Intention" },
  { id: 60, gradient: "from-neutral-100 to-zinc-200", ratio: "aspect-square", date: "08 December 2025", title: "Purpose" },
  { id: 61, gradient: "from-stone-100 to-neutral-200", ratio: "aspect-[4/3]", date: "09 December 2025", title: "Meaning" },
  { id: 62, quote: "Beauty is in the eye of the beholder.", ratio: "aspect-[3/4]", title: "Quote Nine", date: "10 December 2025" },
  { id: 63, gradient: "from-gray-50 to-stone-200", ratio: "aspect-square", date: "11 December 2025", title: "Aesthetic" },
  { id: 64, gradient: "from-slate-100 to-gray-200", ratio: "aspect-[4/3]", date: "12 December 2025", title: "Elegance" },
  { id: 65, gradient: "from-gray-100 to-slate-200", ratio: "aspect-[3/4]", date: "13 December 2025", title: "Grace" },
  { id: 66, gradient: "from-zinc-100 to-gray-200", ratio: "aspect-square", date: "14 December 2025", title: "Harmony" },
  { id: 67, gradient: "from-neutral-100 to-zinc-200", ratio: "aspect-[4/3]", date: "15 December 2025", title: "Unity" },
  { id: 68, gradient: "from-stone-100 to-neutral-200", ratio: "aspect-[3/4]", date: "16 December 2025", title: "Coherence" },
  { id: 69, quote: "Art is the elimination of the unnecessary.", ratio: "aspect-square", title: "Quote Ten", date: "17 December 2025" },
  { id: 70, gradient: "from-gray-50 to-stone-200", ratio: "aspect-[4/3]", date: "18 December 2025", title: "Distillation" },
  { id: 71, gradient: "from-slate-100 to-gray-200", ratio: "aspect-[3/4]", date: "19 December 2025", title: "Final Form" },
  { id: 72, gradient: "from-gray-100 to-slate-200", ratio: "aspect-square", date: "20 December 2025", title: "Completion" },
];

const Moodboard = () => {
  return (
    <div className="min-h-screen px-6 py-12">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-3 md:grid-cols-9 gap-3">
          {moodboardItems.map((item) => (
            <div key={item.id} className={item.ratio}>
              {('quote' in item) ? (
                <div className="w-full h-full flex items-center justify-center p-4 bg-gradient-to-br from-gray-50 to-gray-100">
                  <p className="text-[13px] md:text-[15px] font-medium text-gray-500 italic text-center">
                    {item.quote}
                  </p>
                </div>
              ) : (
                <div className={`w-full h-full bg-gradient-to-br ${item.gradient}`} />
              )}
              <div className="mt-1">
                <p className="text-[10px] md:text-[12px] font-light opacity-85" style={{ lineHeight: '1.45' }}>
                  {item.title}
                </p>
                <p className="text-[10px] md:text-[12px] font-light opacity-85" style={{ lineHeight: '1.45' }}>
                  {item.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Moodboard;
