import React from 'react';
import { useParams } from 'react-router-dom';

import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';

import Auth from '../utils/auth';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_ITEM } from '../utils/queries';

import { QUERY_USER, QUERY_ACCOUNT } from '../utils/queries';
import ItemCard from "../components/Cards/product";
import ItemForm from '../components/ItemForm';




const SingleItem = props => {
  const { id: itemId } = useParams();
  const { loading, data } = useQuery(QUERY_ITEM, {
    variables: { id: itemId },
  });
  console.log(data);
  // const { data: userData } = useQuery(QUERY_ACCOUNT_BASIC);
  const item = data?.item || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <h1>Barter Item</h1>

      <ItemCard item={item} title={item.title} image={item.image} />

      {/* <ItemForm item={item} /> */}
      <div>
        {/* <div className="card mb-3">
          <p className="card-header">
            <span style={{ fontWeight: 700 }} className="text-light">
              {item.username}
            </span>{' '}
          item on {item.createdAt}
          </p>
          <div className="card-body">
            <p>{item.description}</p>
          </div>
        </div> */}
        {item.commentCount > 0 && <CommentList comments={item.comments} />}
        {Auth.loggedIn() && <CommentForm itemId={item._id} />}
      </div>

    </main>
  );
};

export default SingleItem;


// const SingleItem = props => {
//     const { id: itemId } = useParams();

//     const { loading, data } = useQuery(QUERY_ITEM, {
//         variables: { id: itemId }
//     });
//     const item = data?.item || {};

//     if (loading) {
//         return <div>Loading...</div>;
//     }
// export default function SingleItem({ item }) {
//     //const classes = useStyles();
//     const [expanded, setExpanded] = React.useState(false);

//     const handleExpandClick = () => {
//       setExpanded(!expanded);
//     };

//     return (
//         <div>
//             <div className="card mb-3">
//                 <p className="card-header">
//                     <span style={{ fontWeight: 700 }} className="text-light">
//                         {/* {item.username} */}
//                     </span>{' '}
//           item on {item.createdAt}
//                 </p>
//                 <div className="card-body">
//                     <p>{item.description}</p>
//                 </div>
//             </div>

//             {item.commentCount > 0 && <CommentList comments={item.comments} />}
//         </div>
//     );
// };

//export default SingleItem;