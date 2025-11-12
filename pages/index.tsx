import Banner from "@/components/Banner/Banner";
import Experience from "@/components/Experience/Experience";
import Projects from "@/components/Projects/Projects";
import SkillSet from "@/components/SkillSetSec/SkillSet";
import Wrapper from "@/layout/wrapper/Wrapper";

export default function Home() {
  return (
    <Wrapper>
      <Banner />
      <Projects />
      <SkillSet />
      <Experience />
    </Wrapper>
  );
}
