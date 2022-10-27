const Card = (props) => {
  const { name, flags, region, capital } = props;
  return (
    <div className="card">
      <img src={flags.svg} alt="" />
      <div className="write">
       <h1>{name.common}</h1>
      <h1>{region}</h1>
      <h1>{capital}</h1> 
      </div>
      
    </div>
  );
};
export default Card;
