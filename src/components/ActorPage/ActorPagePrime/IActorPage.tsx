export interface IActorPage {
  photo: string;
  name: string;
  growth: number;
  birthday: number;
  profession: [
    {
      value: string;
    }
  ];

  age: number;
  facts: [
    {
      value: string;
    }
  ];
  movies: [
    {
      id: number;
      name: string;
    }
  ];
}
