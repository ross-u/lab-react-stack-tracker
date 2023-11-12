import { useParams } from "react-router-dom";

function TechnologyPage(props) {
  const { slug } = useParams();
  let result;
  for (let i = 0; i < props.technologies.length; i++) {
    if (props.technologies[i].slug === slug) {
      result = props.technologies[i];
      break;
    }
  }
  if (!result) {
    return <div>Error slug not found</div>;
  }
  return (
    <div>
      <h1>Technology Details</h1>
      <div>{result.name}</div>
        <img src={result.image}/>
        <div>{result.description}</div>
    </div>
  );
}

export default TechnologyPage;
