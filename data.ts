// data.ts

export interface IProject {
  pet_id: string;
  pet_name: string;
  pet_type: string;
  pet_age: string;
  pet_location: string;
  pet_image: string;
}

export const projects: IProject[] = [
  {
    pet_id: "1",
    pet_name: "Bingo",
    pet_type: "Dog",
    pet_age: "2 years",
    pet_location: "Lagos",
    pet_image:
      "https://petscare-assets-prod.s3.amazonaws.com/media/original_images/red-heeler-dog-ball-tricycle-yard-35481.webp",
  },
  {
    pet_id: "2",
    pet_name: "Whiskers",
    pet_type: "Cat",
    pet_age: "1 year",
    pet_location: "Abuja",
    pet_image:
      "https://www.whiskas.co.uk/sites/g/files/fnmzdf8046/files/2022-12/jai-un-chat-difficile-est-ce-normal_1.jpg",
  },
  {
    pet_id: "3",
    pet_name: "Chichi",
    pet_type: "Rabbit",
    pet_age: "6 months",
    pet_location: "Calabar",
    pet_image: "https://placebear.com/300/300",
  },
];
