import {
  type ChangeEvent,
  createRef,
  type FormEvent,
  type MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import { withLayout } from "../../layout/layout.component";
import type { IMovieProps } from "../../routes/movies/movies.props";
import Button from "../button/button.component";
import Checkbox from "../checkbox/checkbox.component";
import Input from "../input/input.component";
import Select from "../select/select.component";
import Textarea from "../textarea/textarea.component";
import Title from "../title/title.component";
import Swal from "sweetalert2";

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
    genres: [],
    genres_array: [Array(13).fill(false)],
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
  let { id } = useParams();
  if (id === undefined) {
    id = "0";
  }

  useEffect(() => {
    if (jwtToken === "") {
      navigate("/login");
      return;
    }

    if (id === "0") {
      // adding a movie
      setMovie({
        id: 0,
        title: "",
        release_date: "",
        runtime: 0,
        mpaa_rating: "",
        description: "",
        genres: [],
        genres_array: [Array(13).fill(false)],
      });

      const headers = new Headers();
      headers.append("Content-Type", "application/json");

      const requestOptions = {
        method: "GET",
        headers,
      };

      fetch(`/genres`, requestOptions)
        .then((res) => res.json())
        .then((data) => {
          const checks: { id: number; checked: boolean; genre: string }[] = [];

          data.forEach((g: { id: number; checked: boolean; genre: string }) => {
            checks.push({ id: g.id, checked: false, genre: g.genre });
          });

          setMovie((m) => ({
            ...m,
            genres: checks,
            genres_array: [],
          }));
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      // editing an existing movie
    }
  }, [id, jwtToken, navigate]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errors: string[] = [];
    const required = [
      { field: movie.title, name: "title" },
      { field: movie.release_date, name: "release_date" },
      { field: movie.runtime, name: "runtime" },
      { field: movie.description, name: "description" },
      { field: movie.mpaa_rating, name: "mpaa_rating" },
    ];

    required.forEach((obj) => {
      if (obj.field === "") {
        errors.push(obj.name);
      }
    });

    if (movie.genres_array && !movie.genres_array.length) {
      Swal.fire({
        title: "error",
        text: "you must choose at least one genre",
        icon: "error",
        confirmButtonText: "OK",
      });
      errors.push("genres");
    }

    setErrors(errors);

    if (errors.length) {
      return false;
    }
  };

  const handleChange = (
    e:
      | ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLTextAreaElement>
      | ChangeEvent<HTMLSelectElement>,
  ) => {
    const value = e.target.value;
    const name = e.target.name;
    setMovie({
      ...movie,
      [name]: value,
    });
  };

  const handleCheck = (e: ChangeEvent<HTMLInputElement>, position: number) => {
    console.log("handle check called");
    console.log("value in handle check: ", e.target.value);
    console.log("checked is ", e.target.checked);
    console.log("position is ", position);

    const tmpArr = movie.genres;

    if (tmpArr) {
      tmpArr[position].checked = !tmpArr[position].checked;

      const tmpIDs = movie.genres_array;

      if (tmpIDs) {
        if (!e.target.checked) {
          tmpIDs.splice(tmpIDs?.indexOf(e.target.value));
        } else {
          tmpIDs.push(parseInt(e.target.value, 10));
        }
      }

      setMovie({
        ...movie,
        genres_array: tmpIDs,
      });
    }
  };

  return (
    <>
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

          <div className="section">
            <Title tag="h2">genres</Title>

            {movie.genres && movie.genres.length && (
              <>
                {Array.from(movie.genres).map((g, i) => (
                  <Checkbox
                    key={i}
                    type="checkbox"
                    heading={g.genre}
                    name="genre"
                    id={"genre-" + i}
                    onChange={(e) => handleCheck(e, i)}
                    value={g.id}
                    checked={movie.genres ? movie.genres[i].checked : false}
                  />
                ))}
              </>
            )}
          </div>

          <Button>save</Button>
        </form>
      </section>
    </>
  );
};

export default withLayout(EditMovie);
