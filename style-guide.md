# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

## Colors

### Primary

- Moderate cyan: hsl(176, 50%, 47%)
- Dark cyan: hsl(176, 72%, 28%)

### Neutral

- Black: hsl(0, 0%, 0%)
- Dark gray: hsl(0, 0%, 48%)

## Typography

### Body Copy

- Font size: 16px

### Font

- Family: [Commissioner](https://fonts.google.com/specimen/Commissioner)
- Weights: 400, 500, 700


.pa-1-m {
    display: none;
    @include for-size(phone-only) {    
        display: flex; 
        align-items: center;
        margin-top: 10px;
        .product-amount-1-mobile, .product-amount-2-mobile, .product-amount-3-mobile {
            margin-right: 5px;
        }
    }
}

/*.pledge {
    display: flex;
    align-items: center;
    padding: 1.25rem 0.625rem;

    p {
        width: 60%;
        color: map-get($color, c-dark-gray);

        @include for-size(phone-only) {    
            margin: 0 auto; 
            margin-bottom: 0.9375rem;
        }
    }

    input {
        margin-right: 1.25rem;
    }

    @include for-size(phone-only) {    
        display: block; 
    }
}*/

