import React, { useState } from 'react';
import './Group.css'
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import FilterButton from '../../components/FilterButton/FilterButton';
import MemberInfo from './components/MemberInfo/MemberInfo'
import { Icon } from '@iconify/react';

function Group() {
    const navigate = useNavigate();
    const [filterBtnStyles, setFilterBtnStyles] = useState(Array.from( {length: 5}, () => false));
    const [cuisineClicked, setCuisineClicked] = useState(Array.from( {length: 6}, () => false));
    const [priceClicked, setPriceClicked] = useState(Array.from( {length: 3}, () => false ));
    const [dietClicked, setDietClicked] = useState(Array.from( {length: 6}, () => false));
    const [mealClicked, setMealclicked] = useState(Array.from( {length: 6}, () => false));

    const members = [
        { name: 'Plexie' },
        { name: 'Aneri <3' },
        { name: 'Jerm Yoo' },
        { name: 'Tye Tye' },
        { name: 'Shaamer :)' },
        { name: 'Plexie' },
        { name: 'Plexie' },
        { name: 'Plexie' },
        { name: 'Plexie' },
    ];

    const filters = [
        { 
            type: 'Cuisine',
            className: 'group-cuisine',
        },
        { 
            type: 'Price Range',
            className: 'group-price-range',
        },
        { 
            type: 'Diet and Allergens',
            className: 'group-allergens',
        },
        { 
            type: 'Meal Type',
            className: 'group-meal-type',
        },
    ];

    const cuisines = [
        { 
            type: 'Mexican',
            img: 'group-mexican-food-img',
        },
        { 
            type: 'American',
            img: 'group-american-food-img',
        },
        { 
            type: 'Chinese',
            img: 'group-chinese-food-img',
        },
        { 
            type: 'Japanese',
            img: 'group-japanese-food-img',
        },
        { 
            type: 'Korean',
            img: 'group-korean-food-img',
        },
        { 
            type: 'Indian',
            img: 'group-indian-food-img',
        },
    ];

    const priceRanges = [
        { amount: '< $15' },
        { amount: '$15 - $25' },
        { amount: '$25 >' },
    ];

    const allergens = [
        { 
            type: 'Vegetarian',
            img: '',
        },
        { 
            type: 'Vegan',
            img: '',
        },
        { 
            type: 'Dairy / Gluten free',
            img: '',
        },
        { 
            type: 'Nuts',
            img: '',
        },
        { 
            type: 'Eggs',
            img: '',
        },
        { 
            type: 'Soy',
            img: '',
        },
    ];

    const meals = [
        { 
            type: 'Breakfast',
            img: '',
        },
        { 
            type: 'Lunch',
            img: '',
        },
        { 
            type: 'Dinner',
            img: '',
        },
        { 
            type: 'Brunch',
            img: '',
        },
        { 
            type: 'Snack',
            img: '',
        },
        { 
            type: 'Dessert',
            img: '',
        },
    ];

    const handleSingleBtnColor = (arr, setArr, index) => {
        const newBtnStyles = arr.map((value, currIndex) => currIndex === index ? true : false);
        setArr(newBtnStyles);
    };

    const handleMultiClick = (arr, setArr, index) => {
        const newMultiClick = [...arr];
        newMultiClick[index] = !arr[index];
        setArr(newMultiClick);
    };

    const groupMembers = () => {
        return (
            <div className='group-right-card-content'>
                <h2 className='group-member-title'>Group members: </h2>
                {members.map((member, index) => (
                    <MemberInfo key={index} nameStyle='group-member-names' name={member.name} /> 
                ))}
            </div>
        );
    };

    const cuisineIndividualCards = cuisines.map((cuisine, index) => (
        <div className='group-cuisine-individual-card'>
            <FilterButton content={
                <div className='group-cuisine-content'>
                    <p>{cuisine.type}</p>
                    <div className={cuisine.img}></div>
                </div>
                } 
            onClickHandler={() => handleMultiClick(cuisineClicked, setCuisineClicked, index)}
            onFilter={cuisineClicked[index]}
            />
        </div>
    ));

    const cuisineCards = () => {
        return (
            <div className='group-cuisine-cards-container'>
                <div className='group-cuisine-row-container'>
                    {cuisineIndividualCards.slice(0, cuisineIndividualCards.length/2)}
                </div>
                <div className='group-cuisine-row-container'>
                    {cuisineIndividualCards.slice(cuisineIndividualCards.length/2)}
                </div>
            </div>
        );
    };

    const priceRangeCards = () => {
        return (
            <>
            <div className='group-cuisine-row-container'>
                {priceRanges.map((priceRange, index) => (
                    <div className='group-small-individual-card'>
                        <FilterButton content={
                            <div>
                                <p>{priceRange.amount}</p>
                            </div>
                            } 
                        onClickHandler={() => handleSingleBtnColor(priceClicked, setPriceClicked, index)}
                        onFilter={priceClicked[index]}
                        />
                    </div>
                ))}
            </div>
            <div className='group-cuisine-row-container'></div>
            </>
        );
    };

    const allergensIndividualCards = allergens.map((allergen, index) => (
        <div className='group-cuisine-individual-card'>
            <FilterButton content={
                <div>
                    <p>{allergen.type}</p>
                </div>
                } 
                onClickHandler={() => handleMultiClick(dietClicked, setDietClicked, index)}
                onFilter={dietClicked[index]}
            />
        </div>
    ));

    const allergensCards = () => {
        return (
            <div className='group-cuisine-cards-container'>
                <div className='group-cuisine-row-container'>
                    {allergensIndividualCards.slice(0, allergensIndividualCards.length/2)}
                </div>
                <div className='group-cuisine-row-container'>
                    {allergensIndividualCards.slice(allergensIndividualCards.length/2)}
                </div>
            </div>
        );
    };

    const mealsIndividualCards = meals.map((meal, index) => (
        <div className='group-cuisine-individual-card'>
            <FilterButton content={
                <div>
                    <p>{meal.type}</p>
                </div>
                } 
                onClickHandler={() => handleMultiClick(mealClicked, setMealclicked, index)}
                onFilter={mealClicked[index]}
                />
        </div>
    ));

    const mealCards = () => {
        return (
            <div className='group-cuisine-cards-container'>
                <div className='group-cuisine-row-container'>
                    {mealsIndividualCards.slice(0, mealsIndividualCards.length/2)}
                </div>
                <div className='group-cuisine-row-container'>
                    {mealsIndividualCards.slice(mealsIndividualCards.length/2)}
                </div>
            </div>
        );
    }

    return (
        <>
            <Header />
            <div className='group-hero'>
                <h1 className='group-title'>Choose your preferences and create your group</h1>
                <div className='group-cards'>
                    <div className='group-left-card-container'>
                        <Card content={
                            <div className='group-left-card-content'>
                                <div className='group-filters'>
                                    <div className='group-filter'>
                                        <Card content={
                                            <div className='group-filter-icon-styling'>
                                                <Icon className='group-filter-icon' fontSize={30} icon='material-symbols:filter-list-rounded' color='black' />
                                            </div>
                                        }
                                        isFloating={true}
                                        />
                                    </div>
                                    {filters.map((filter, index) => (
                                        <div className={filter.className}>
                                            <FilterButton content={
                                                <p className='group-filter-font'>{filter.type}</p>
                                            } 
                                            onClickHandler={() => handleSingleBtnColor(filterBtnStyles, setFilterBtnStyles, index)}
                                            onFilter={filterBtnStyles[index]}
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className='group-content-cards'>
                                    {filterBtnStyles[0] && cuisineCards()}
                                    {filterBtnStyles[1] && priceRangeCards()}
                                    {filterBtnStyles[2] && allergensCards()}
                                    {filterBtnStyles[3] && mealCards()}
                                </div>
                            </div>
                        }/>
                    </div>
                    <div className='group-right-card-container'>
                        {groupMembers()}
                    </div>
                </div>
                <div className='group-cards'>
                    <div className='group-bottom-card-container'>
                        <Card content={
                            <div className='group-bottom-card-content'>
                                <button className='group-generate-link'>Generate Group Link: </button>
                                <div className='group-bottom-card-template'></div>
                            </div>
                        }/>
                    </div>
                    <div className='group-bottom-right-button-container'><Button text={
                        <p className='group-button-font'>Ready to swipe!</p>
                    }
                    onClickHandler={() => navigate("/swipe")}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Group;