function Header({title}){
 let arr = [...title];  

  return (
    <h1>
      {arr.map((el, i) => (
        <span key={i} style={{ color: i % 2 === 0 ? "red" : "blue" }}>
          {el + " "}
        </span>
      ))}
    </h1>
  );
}

export default Header;