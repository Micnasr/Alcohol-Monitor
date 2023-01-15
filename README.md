# Alcohol Monitor (Deltahacks 9) <img width = 32 src ="https://user-images.githubusercontent.com/73625971/212537810-fc7a4278-6efb-4f11-9612-576b3d5ac616.svg">

<img align = Right width="65%" alt="image" src="https://user-images.githubusercontent.com/73625971/212538396-09936606-d335-4112-87ac-105bbac0c82d.png">


## Contributors 🤝
* [Micnasr](https://github.com/Micnasr)
* [Qasim2S](https://github.com/Qasim2S)
* [Raziz1](https://github.com/Raziz1)

## Tools 🔨
* ReactJS
* Firebase
* CSS

## About
This project was designed during Deltahacks IX and was submitted to the *Google Developer Student Club Challenge* category. The primary goal of this category was to build a project that solves one of the United Nations' 17 Sustainable Development Goals using [Google Technology](https://developers.google.com/products). We chose the goal of creating a web application that promotes good health & well being. 

This program calculates the users blood alcohol concentration using a few input parameters to determine whether it would be safe for the user to drive their vehicle (Using Ontario's recommended blood alcohol concentraition 0.08). The program uses the users weight, sex, alcohol consumed (grams) (shots [1.5oz], wine glass [5oz], beer cup [12oz]), alcoholic beverage. The alcoholic beverage is a local database constructed using some of the most popoular drinks.

With the above parameters we used the Widmark formula described in the following [paper](https://www.yasa.org/upload/uploadedfiles/alcohol.pdf). The Widmark is a rough estimate of the blood alcohol concentration and shouldn't be taken as a definitive number. The Widmark formula is:

* ```BAC=(Alcohol consumed in grams / (Body weight in grams * r)) * 100```
* ``` Alcohol consumed (g) = Volume consumed (mL) * Alcohol (%) * Density of Alcohol (0.789 g/cm^3)```
* BAC in terms of time: ```BAC = BAC - (BAC * hours * 0.015)```


## Database 💾 
For the Google technology we decided to integrate the Firebase Realtime Database. We store all of drinks on there so that whenever we reload the page or access the website on a different devices, we can continue from where we left off. Your alcohol blood concentration also depends on how much time has passed since you drank the drink so we are able to store the time and update it continuously to show more accurate results.

<p align="center">
<img width="50%" src="https://user-images.githubusercontent.com/73625971/212540475-93fe744b-fa3d-4c48-81b5-845961fa9e83.png">
</p>

