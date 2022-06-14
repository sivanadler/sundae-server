import { render, screen } from "@testing-library/react";
import Options from "../Options"; 

test('it displays image for each scoop from the server', async () => {
    render(<Options optionType={'scoops'}/>)

    //find images
    const scoopImages = await screen.findAllByRole('img', {name: /scoop$/i})
    expect(scoopImages).toHaveLength(2)

    //confirm alt text of images
    const altText = scoopImages.map((element) => element.alt)
    expect(altText).toEqual(['Chocolate Scoop', 'Vanilla Scoop'])
})

test('it displays image for each topping from the server', async () => {
    render(<Options optionType={"toppings"}/>)

    //find images
    const toppingImges = await screen.findAllByRole('img', {name: /topping$/i})
    expect(toppingImges).toHaveLength(3)

    //cofirm alt text of images
    const altText = toppingImges.map((element) => element.alt)
    expect(altText).toEqual(['Cherries Topping', 'M&Ms Topping', 'Hot Fudge Topping'])
})