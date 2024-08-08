import Button from "../button/button.component";
import Section from "../section/section.component";
import Title from "../title/title.component";
import type { IDummyProps } from "./dummy.props";

const Dummy = ({ title }: IDummyProps) => {
  return (
    <Section>
      <Title tag="h1" hasAnim={true}>
        {title}
      </Title>
      <Button link="/movies">go to movies</Button>
    </Section>
  );
};

export default Dummy;
