//  import React, { createContext } from "react";

//  const ReviewsContext = createContext();

//  const currentReviews = ['aa','bb','cc'];

//  const ReviewProvider = ({children}) => {

//     const [reviews, setReviewsList] = React.useState(currentReviews);

//     return (
//         <ReviewsContext.Provider value={{reviews}} >
//             {children}
//         </ReviewsContext.Provider>
//     )
//  }

//  export const useReviewListContext = () => React.useContext(ReviewsContext);

//  export default ReviewProvider
