import { mono, mont } from "@/utils/fonts";
import { project } from "@/utils/data";
import { MotionOpacityDiv } from "@/components/Motion";
import Project from "@/components/Work/Project";

export default function Work() {
  return (
    <section className="h-[100%] py-48 mt-40 pb-20 xl:mx-20" id="work">

      <MotionOpacityDiv>
        <h2 className={mont.className}>
          <span className={`${mono.className} text-lg md:text-2xl text-purple`}>
            03.{" "}
          </span>
          Some Things I've Built
        </h2>
        <div className="parent-work">
          <Project project={project} />
        </div>
      </MotionOpacityDiv>
    </section>
  );
}
