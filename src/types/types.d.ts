export interface FavoritePlantProps {
  item: {
    name: string;
    url: string;
    price: number;
    sun: string;
    toxic: boolean;
    water: string;
    staff_favorite: boolean;
  };
}

export interface Plant {
  id: number;
  name: string;
  sun: string;
  water: string;
  url: string;
  price: number;
  toxic: boolean;
  staff_favorite: boolean;
}

export interface Dimensions {
  width: string;
  height: string;
}

export interface SelectProps {
  iconSrc: string;
  text: string;
  options: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  dimensions: Dimensions;
}

export interface SelectedOptions {
  sunOption: string;
  waterOption: string;
  petOption: string | boolean;
}
