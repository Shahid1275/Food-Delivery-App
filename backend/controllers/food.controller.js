import foodModel from "../models/food.model.js";
import fs from 'fs';

const addFood = async (req, res) => {
    

    const image_filename = req.file.filename;

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename,
    });

    try {
        await food.save();
        res.json({ success: true, message: "Food added successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error adding food" });
    }
}

// All food list

const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json({success: true, data: foods});
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error});
        
    }
}

// Remove items

const removeFood = async (req, res) => {
    try {
        // const {id} = req.body.id;
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`, ()=>{});

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success: true, message: "Food Removed"})
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error})
        
        
    }
}

export { addFood, listFood, removeFood };
