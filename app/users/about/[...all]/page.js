const Routes = ({ params }) => {
  return (
    <div>
      All Routes
      <br />
      <ul>
        {params.all.map((param, index) => (
          <li key={index}>{param}</li>
        ))}
      </ul>
    </div>
  );
};

export default Routes;
