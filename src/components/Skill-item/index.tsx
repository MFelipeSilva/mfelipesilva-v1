import * as Styles from "./styles";
import imgcontainer from "../../assets/imgcontainer.svg";

interface Props {
  skill: any
}

export const SkillItem = ({ skill }: Props) => {
  return (
      <Styles.CardCustom>
        <Styles.ContainerImg>
          <Styles.Img src={imgcontainer}></Styles.Img>
          <Styles.Icon src={skill.imageURL} Width="40px" Height="40" alt="logots" />
        </Styles.ContainerImg>
        
        <Styles.Title>{skill.title}</Styles.Title>

        <Styles.Text>{skill.text}</Styles.Text>
      </Styles.CardCustom>
  )
};