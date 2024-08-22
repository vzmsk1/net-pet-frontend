import { type ChangeEvent, type FormEvent, useEffect, useState } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import { withLayout } from "../../layout/layout.component";
import type { IMovieProps } from "../../routes/movies/movies.props";
import Input from "../input/input.component";
import Select from "../select/select.component";
import Textarea from "../textarea/textarea.component";
import Title from "../title/title.component";

const EditMovie = () => {
  const navigate = useNavigate();
  const { jwtToken } = useOutletContext<any>();

  const [error, setError] = useState<null | string>(null);
  const [errors, setErrors] = useState<[] | string[]>([]);
  const [movie, setMovie] = useState<IMovieProps>({
    id: 0,
    title: "",
    release_date: "",
    runtime: 0,
    mpaa_rating: "",
    description: "",
  });

  const mpaaOptions = [
    { id: "G", value: "G" },
    { id: "PG", value: "PG" },
    { id: "PG13", value: "PG13" },
    { id: "R", value: "R" },
    { id: "NC17", value: "NC17" },
    { id: "18A", value: "18A" },
  ];

  // get id from the url
  const { id } = useParams();

  useEffect(() => {
    if (jwtToken === "") {
      navigate("/login");
      return;
    }
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const value = e.target.value;
    const name = e.target.name;
    setMovie({
      ...movie,
      [name]: value,
    });
  };

  return (
    <section className="section">
      <Title tag="h2">edit movie</Title>
      <form onSubmit={handleSubmit}>
        <input type="hidden" name="id" value={movie.id} id="id" />
        <Input
          heading="title"
          type="text"
          name="title"
          value={movie.title}
          onChange={handleChange}
          errorMsg={"please enter a title"}
        />
        <Input
          heading="release date"
          type="date"
          name="release_date"
          value={movie.release_date}
          onChange={handleChange}
          errorMsg={"please enter a release date"}
        />
        <Input
          heading="runtime"
          type="text"
          name="runtime"
          value={movie.runtime}
          onChange={handleChange}
          errorMsg={"please enter a runtime"}
        />
        <Select
          heading="mpaa rating"
          name="mpaa_rating"
          options={mpaaOptions}
          onChange={handleChange}
          placeholder="choose..."
          errorMsg="please choose"
        />
        <Textarea
          heading="description"
          name="description"
          value={movie.description}
          rows={3}
          onChange={handleChange}
          errorMsg="please enter a description"
        />
      </form>
    </section>
  );
};

export default withLayout(EditMovie);
