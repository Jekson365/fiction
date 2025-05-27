import React, { useState } from 'react'
import Post from './Post'
import SetSize from '../actions/SetSize'

function SuperPage() {

    const [currentSize, setCurrentSize] = useState(0)
    const data = [
        {
            id: 1,
            title: "დასახელება",
            img: "https://ew.com/thmb/BvLxxbgs9aF_hlPFJYKYR3Gac2I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Cowboy-Bebop-5dbea8a55cde4ea88547485f46032a8e.jpg",
            description: "შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის შემქმნელებს, რეალურთან მაქსიმალურად მიახლოებული შაბლონი წარუდგინონ შემფასებელს. ხშირადაა შემთხვევა, როდესაც დიზაინის შესრულებისას საჩვენებელია, თუ როგორი იქნება ტექსტის ბლოკი. სწორედ ასეთ დროს არის მოსახერხებელი ამ გენერატორით შექმნილი ტექსტის გამოყენება, რადგან უბრალოდ „ტექსტი ტექსტი ტექსტი“ ან სხვა გამეორებადი სიტყვების ჩაყრა, ხელოვნურ ვიზუალურ სიმეტრიას ქმნის და არაბუნებრივად გამოიყურება."
        },
        {
            id: 2,
            title: "დასახელება",
            img: "https://ew.com/thmb/BvLxxbgs9aF_hlPFJYKYR3Gac2I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Cowboy-Bebop-5dbea8a55cde4ea88547485f46032a8e.jpg",
            description: "შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის შემქმნელებს, რეალურთან მაქსიმალურად მიახლოებული შაბლონი წარუდგინონ შემფასებელს. ხშირადაა შემთხვევა, როდესაც დიზაინის შესრულებისას საჩვენებელია, თუ როგორი იქნება ტექსტის ბლოკი. სწორედ ასეთ დროს არის მოსახერხებელი ამ გენერატორით შექმნილი ტექსტის გამოყენება, რადგან უბრალოდ „ტექსტი ტექსტი ტექსტი“ ან სხვა გამეორებადი სიტყვების ჩაყრა, ხელოვნურ ვიზუალურ სიმეტრიას ქმნის და არაბუნებრივად გამოიყურება."
        },
        {
            id: 3,
            title: "დასახელება",
            img: "https://ew.com/thmb/BvLxxbgs9aF_hlPFJYKYR3Gac2I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Cowboy-Bebop-5dbea8a55cde4ea88547485f46032a8e.jpg",
            description: "აღწერა"
        },
    ]
    return (
        <>
            <SetSize currentSize={currentSize} setCurrentSize={setCurrentSize} />
            <div className="container">
                {data && data.map((e) => {
                    const { id, title, img, description } = e
                    return (
                        <>
                            <Post fontSize={currentSize} object={e} />
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default SuperPage