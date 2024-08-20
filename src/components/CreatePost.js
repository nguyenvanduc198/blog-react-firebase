import React, { useEffect } from "react";
import "./CreatePost.css";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../filebase";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const CreatePost = ({ isAuth }) => {
  const [title, setTitle] = useState();
  const [postText, setPostText] = useState();
  const navigate = useNavigate();
  // const createPost = async () => {
  //   // if (auth.currentUser) {
  //     await addDoc(collection(db, "posts"), {
  //       title: title,
  //       postText: postText,
  //       author: {
  //         username: auth.currentUser?.displayName,
  //         id: auth.currentUser?.uid,
  //       },
  //     });
  //   // } else {
  //   //   console.log("User not authenticated");
  //   // }
  // };

  // const createPost = async () => {
  //   try {
  //     if (auth.currentUser) {
  //       await addDoc(collection(db, "posts"), {
  //         title: title,
  //         postsText: postText,
  //         author: {
  //           username: auth.currentUser.displayName,
  //           id: auth.currentUser.uid,
  //         },
  //       });
  //     } else {
  //       console.log("User not authenticated");
  //     }
  //   } catch (error) {
  //     console.error("Error adding document: ", error);
  //   }
  // };

  // const createPost = async () => {
  //     const user = auth.currentUser;

  //     if (user) {
  //       const username = user.displayName || "Anonymous"; // Default to 'Anonymous' if displayName is undefined
  //       const userId = user.uid;

  //       if (!title || !postText) {
  //         console.log("Title and postText are required.");
  //         return;
  //       }

  //       try {
  //         await addDoc(collection(db, "posts"), {
  //           title: title,
  //           postText: postText,
  //           author: {
  //             username: username,
  //             id: userId,
  //           },
  //           createdAt: new Date(),
  //         });
  //         console.log("Post created successfully!");
  //       } catch (error) {
  //         console.error("Error adding document: ", error);
  //       }
  //     } else {
  //       console.log("User not authenticated");
  //     }
  //   };

  const createPost = async () => {
    try {
      if (auth.currentUser) {
        await addDoc(collection(db, "posts"), {
          title: title,
          postsText: postText,
          author: {
            username: auth.currentUser.displayName,
            id: auth.currentUser.uid,
          },
        });
        navigate("/");
      } else {
        console.log("User not authenticated");
      }
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, [isAuth, navigate]);
  return (
    <div className="createPostPage">
      <div className="postContainer">
        <h1>記事を投稿する</h1>
        <div className="inputPost">
          <div>タイトル</div>
          <input
            type="text"
            placeholder="タイトル記入"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="inputPost">
          <div>投稿</div>
          <textarea
            name=""
            id=""
            placeholder="投稿内容を記入"
            onChange={(e) => setPostText(e.target.value)}
          ></textarea>
        </div>
        <button className="postButton" onClick={createPost}>
          投稿する
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
