import React from "react";
// import ReactDOM from "react-dom";
import ItemCard from "../Cards/product";
import { Grid } from "@material-ui/core";

const ItemList = ({ items, title }) => {
  if (!items.length) {
    return <h3>No Items Yet</h3>;
  }

  return (
    <div>
      {/* <h3>{title}</h3> */}
      <Grid container>
        {items &&
          items.map((item) => (
            <Grid item xs={12} item sm={6} item md={3} item lg={3}>
              <ItemCard className="item-cards " item={item} />
            </Grid>
          ))}
      </Grid>
      {/* <div className="card-body">
        <Link to={`/item/${item._id}`}>
          <p>{item.description}</p>
          <p className="mb-0">
            Comments: {item.commentCount} || Click to{' '}
            {item.commentCount ? 'see' : 'start'} the discussion!
                </p>
        </Link>
      </div> */}
    </div>
  );
};

// ReactDOM.render(<ItemCard />);

export default ItemList;
