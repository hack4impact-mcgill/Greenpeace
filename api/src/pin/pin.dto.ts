export interface PinResponseDto {
  status: string;
  pin?: PinDto;
}

export interface ManyPinResponseDto {
  status: string;
  pins?: Array<PinDto>;
}

export interface PinDto {
  id: number;
  name: string;
  description?: string;
  coordinateX: number;
  coordinateY: number;
  isValid?: boolean;
  createdAt: Date;
}
