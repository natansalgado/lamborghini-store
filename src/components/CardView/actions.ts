import { Dispatch, SetStateAction } from "react";
import { CarModel } from "./props";
import { fetchGetCarData } from "../../api/getCars";

export const loadCarData = async (id: number, setCarData: Dispatch<SetStateAction<CarModel | null>>) => {
    try {
        const response = await fetchGetCarData(id);
        if (response) {
            setCarData(response);
        }
    } catch (error) {
        console.log("Erro ao tentar buscar da api:", error);
    }
};

export const handlePreviusItem = async (carData: CarModel | null, setCarData: Dispatch<SetStateAction<CarModel | null>>) => {
    let response = null;
    try {
        if (carData && carData?.id > 1) {
            response = await fetchGetCarData(carData.id - 1);
        }
        
        if (response) {
            setCarData(response);
        }
    } catch (error) {
        console.log("Erro ao tentar buscar da api:", error);
    }
}

export const handleNextItem = async (carData: CarModel | null, setCarData: Dispatch<SetStateAction<CarModel | null>>) => {
    let response = null;
    try {
        if (carData && carData?.id < 10) {
            response = await fetchGetCarData(carData.id + 1);
        }

        if (response) {
            setCarData(response);
        }
    } catch (error) {
        console.log("Erro ao tentar buscar da api:", error);
    }
}