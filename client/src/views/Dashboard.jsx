import Dashwidg from "../elements/Dashwidg";
import YoutubeEmbed from "../elements/YoutubeEmbed";

export default function Dashboard() {
  return (

    <div className="container-fluid p-4">
      <div className="row">
        <div className="col-8" >
          <YoutubeEmbed embedId="ruU6iLiWL88" />
        </div>
        <div className="col-4">
          <Dashwidg />
        </div>
      </div>
    </div>

  )
}