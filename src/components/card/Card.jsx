import { Panel } from 'rsuite';



export default function Card ({url, content, name}){
    return(

    
    <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 500, backgroundColor:"burlywood" }}>
    <img src={url} height="240" />
    <Panel header={name}>
      <p>
        <small>
        {content}
        </small>
      </p>
    </Panel>
  </Panel>
    )
}