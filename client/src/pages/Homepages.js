import React from "react";
import ReactDOM from "react-dom";
import ItemCard from "../components/Cards/product";
// import ItemList from "../components/ItemList";
import ItemForm from '../components/ItemForm';

import { useQuery } from "@apollo/react-hooks";
import { QUERY_ITEMS, QUERY_ACCOUNT_BASIC } from "../utils/queries";
import { makeStyles } from "@material-ui/core/styles";

// import clsx from "clsx";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardHeader,
} from "@material-ui/core/";
// import CardHeader from "@material-ui/core/CardHeader";
// import CardMedia from "@material-ui/core/CardMedia";
// import CardContent from "@material-ui/core/CardContent";
// import CardActions from "@material-ui/core/CardActions";
// import Collapse from "@material-ui/core/Collapse";
// import Avatar from "@material-ui/core/Avatar";
// import IconButton from "@material-ui/core/IconButton";
// import Typography from "@material-ui/core/Typography";
// import { red } from "@material-ui/core/colors";
// import FavoriteIcon from "@material-ui/icons/Favorite";
// import ShareIcon from "@material-ui/icons/Share";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import MoreVertIcon from "@material-ui/icons/MoreVert";
import Auth from "../utils/auth";
import ItemList from "../components/ItemList";

const Homepages = () => {
  const { loading, data } = useQuery(QUERY_ITEMS);
  console.log(data);
  const { data: userData } = useQuery(QUERY_ACCOUNT_BASIC);
  const items = data?.items || [];

  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <h1>Dashboard</h1>


      <ItemList items={items} />

    </main>
  );
};

export default Homepages;
