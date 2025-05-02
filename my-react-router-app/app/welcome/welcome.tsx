'use client'

import MyButton from "../components/MyButton";
import type Person from "../types/Person";
import Profile from "../components/Profile";
import { useState } from 'react';


  

export function Welcome() {
  
  const person : Person = {
    name: 'Your name',
    imageUrl: 'https://i.pinimg.com/236x/db/1f/9a/db1f9a3eaca4758faae5f83947fa807c.jpg',
    imageSize: 90,
   };

   const [statePerson, setPersonState] = useState(person);
   function handleClick(newName: string, newImageUrl: string) {
    const newPerson : Person = {
      name: newName,
      imageUrl: newImageUrl,
      imageSize: 90,
    };
    setPersonState(newPerson);
   }

	return (
		<div>
			<h1>Welcome to my app</h1>
      <Profile person={statePerson} /> <br />
			<MyButton onClick={handleClick} />
		</div>
	);
}
