import { mont, pop } from "@/utils/fonts";
import { MotionDownOpacity } from "@/components/Motion";

export default function HomePage() {
  return (
    <MotionDownOpacity
      id="home"
      className={`${mont.className} py-40 my-36 mb-96 md:mb-80`}
    >
      <div className="grid gap-2">
        <p className="text-purple">Hi, i'am</p>
        <div className={`${pop.className} grid gap-1`}>
          <h1>Muhammad Nur Fadillah.</h1>
          <h1 className="text-gray3">Back-End Web.</h1>
        </div>
        <p className="xs:pr-0 sm:pr-44 md:pr-72 xl:pr-[590px]">
          i'm a junior backend, developer, passionate about learning and
          collaboration.
        </p>
      </div>
    </MotionDownOpacity>
  );
}
