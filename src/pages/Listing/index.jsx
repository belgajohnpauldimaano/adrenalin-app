import React, { useContext } from "react";

import Card from './../../components/card';
import { AppContext } from "./../../context";

export default function Listing() {
  const { feedData } = useContext(AppContext);
  return (
    <div>
      <div className="row">
        {feedData.map(({ tag, title_long, thumb, slug }, key) => {
          return (
            <div key={key} className="col-6">
              <Card tag={tag} slug={slug} longTitle={title_long} thumbImg={thumb} />
            </div>
          );
        })}
      </div>
    </div>
  )
}
