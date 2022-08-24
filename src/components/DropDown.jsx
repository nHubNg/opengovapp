import { Link } from "react-router-dom";

const DropDown = ({ data }) => {
  return (
    <div className="shadow-lg h-10">
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <Link to={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropDown;
