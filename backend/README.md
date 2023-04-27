## Link to the Routing Document
https://docs.google.com/document/d/1LRkJwLfdthSCvPAzuJAZ2MGN4rbykbsdqdbSQgqtQ7Y/edit?usp=sharing

## Getting Started

Make sure you're using a Python virtual environment in the TasteBuds/backend folder. 

If you haven't created an virtual environment in the TasteBuds/backend folder, navigate to the TasteBuds/backend folder and type:

```bash
python -m venv venv #if your keyword is python
```

or 

```bash
python3 -m venv venv #if your keyword is python3
```

To activate the Python virtual environment in the TasteBuds/backend folder, navigate to the TasteBuds/backend folder and type:

```bash
. venv/bin/activate # if you are using Mac
. venv/Scripts/activate #if you are using Windows
```

You should see a (venv) to the left of your terminal.

To install dependencies from requirements.txt, navigate to the TasteBuds/backend and run:

```bash
pip install -r requirements.txt
```

## Running the server

To run the API server locally, navigate to the TasteBuds/backend folder and run: 

```bash
python app.py
```

or 

```bash
python3 app.py
```

## Adding dependencies

If you want to add any dependncies / libraries / tools, follow these steps:
1. Ask the chat and have it approved
2. run `pip install <dependency>`
3. run `pip freeze > requirements.txt`

## Testing

To insert data (barebones, might change over time):

![image](https://user-images.githubusercontent.com/82493352/232259892-04874c95-6189-438e-8061-b754428b317d.png)

![image](https://user-images.githubusercontent.com/82493352/232259907-5854815e-f3e8-4423-8f1d-cb2427b16515.png)

To view data

![image](https://user-images.githubusercontent.com/82493352/232259993-750ebb95-a188-4ccb-9698-0238704ad5d1.png)
