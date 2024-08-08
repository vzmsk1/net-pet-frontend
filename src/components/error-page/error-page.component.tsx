import { useRouteError } from "react-router-dom";
import { withLayout } from "../../layout/layout.component";
import Section from "../section/section.component";
import Title from "../title/title.component";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <Section>
      <Title tag="h1">sorry, an unexpected error occurred</Title>
      <p>
        {(error as Error)?.message ||
          (error as { statusText?: string })?.statusText}
      </p>
    </Section>
  );
};

export default withLayout(ErrorPage);
