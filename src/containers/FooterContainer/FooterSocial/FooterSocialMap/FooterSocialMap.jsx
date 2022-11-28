import classes from "./FooterSocialMap.module.css";
const FooterSocialMap = ({ item, name }) => {
  return (
    <>
      <h4>{name}</h4>
      <div className={classes.social}>
        {item.map((element) => {
          return (
            <div className={classes.social__card} key={element.name}>
              <a href={element.href} target={"_blank"}>
                {element.src}
                {element.name}
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FooterSocialMap;
