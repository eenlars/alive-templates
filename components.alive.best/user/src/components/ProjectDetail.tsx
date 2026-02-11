interface ProjectDetailProps {
  title: string;
  year: string;
}

const images = [
  { gradient: "linear-gradient(135deg, hsl(210, 15%, 88%) 0%, hsl(210, 15%, 75%) 100%)", ratio: "aspect-[3/2]" },
  { gradient: "linear-gradient(135deg, hsl(180, 12%, 86%) 0%, hsl(180, 12%, 72%) 100%)", ratio: "aspect-square" },
  { gradient: "linear-gradient(135deg, hsl(30, 18%, 87%) 0%, hsl(30, 18%, 73%) 100%)", ratio: "aspect-video" },
  { gradient: "linear-gradient(135deg, hsl(0, 8%, 85%) 0%, hsl(0, 8%, 70%) 100%)", ratio: "aspect-[4/5]" },
  { gradient: "linear-gradient(135deg, hsl(150, 14%, 89%) 0%, hsl(150, 14%, 76%) 100%)", ratio: "aspect-[21/9]" },
  { gradient: "linear-gradient(135deg, hsl(240, 10%, 84%) 0%, hsl(240, 10%, 71%) 100%)", ratio: "aspect-[3/2]" },
];

export const ProjectDetail = ({ title, year }: ProjectDetailProps) => {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col md:flex-row">
        <div className="md:hidden px-6 py-12">
          <p className="text-[14px] font-light tracking-tight opacity-85 mb-4" style={{ lineHeight: '1.45' }}>
            {title}
          </p>
          <p className="text-[14px] font-light tracking-tight opacity-85 mb-4" style={{ lineHeight: '1.45' }}>
            {year}
          </p>
          <p className="text-[14px] font-light tracking-tight opacity-85 mb-4" style={{ lineHeight: '1.45' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="text-[14px] font-light tracking-tight opacity-85" style={{ lineHeight: '1.45' }}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div className="hidden md:block fixed bottom-0 left-0 z-10 w-[260px] p-6">
          <p className="text-[14px] font-light tracking-tight opacity-85 mb-4" style={{ lineHeight: '1.45' }}>
            {title}
          </p>
          <p className="text-[14px] font-light tracking-tight opacity-85 mb-4" style={{ lineHeight: '1.45' }}>
            {year}
          </p>
          <p className="text-[14px] font-light tracking-tight opacity-85 mb-4" style={{ lineHeight: '1.45' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="text-[14px] font-light tracking-tight opacity-85" style={{ lineHeight: '1.45' }}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div className="md:ml-[50%] w-full px-6 pb-12 md:pr-12 space-y-[6px]">
          <div style={{ background: images[0].gradient }} className={images[0].ratio + " transition-opacity duration-200 hover:opacity-95"} />

          <div className="grid grid-cols-2 gap-[6px]">
            <div style={{ background: images[1].gradient }} className={images[1].ratio + " transition-opacity duration-200 hover:opacity-95"} />
            <div style={{ background: images[2].gradient }} className={images[2].ratio + " transition-opacity duration-200 hover:opacity-95"} />
          </div>

          <div style={{ background: images[3].gradient }} className={images[3].ratio + " transition-opacity duration-200 hover:opacity-95"} />
          <div style={{ background: images[4].gradient }} className={images[4].ratio + " transition-opacity duration-200 hover:opacity-95"} />
          <div style={{ background: images[5].gradient }} className={images[5].ratio + " transition-opacity duration-200 hover:opacity-95"} />
        </div>
      </div>
    </div>
  );
};
