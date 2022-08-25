import { Tag } from "../Tag"
import { Container } from "./styles"

export function Note({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h2>{data.title}</h2>
      
      {data.rating == "1" && 
        <div>
      
          <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_305_403)">
              <path d="M9.2344 12.0729C9.15547 12.0732 9.07845 12.0486 9.01432 12.0026L6.00002 9.81724L2.98572 12.0026C2.92133 12.0493 2.84374 12.0743 2.76419 12.074C2.68464 12.0737 2.60723 12.0481 2.54318 12.0009C2.47912 11.9538 2.43173 11.8874 2.40785 11.8116C2.38396 11.7357 2.38484 11.6542 2.41033 11.5788L3.58596 8.0967L0.539084 6.00724C0.473087 5.96203 0.423276 5.89691 0.396929 5.82137C0.370582 5.74584 0.36908 5.66386 0.392643 5.58741C0.416206 5.51096 0.463598 5.44405 0.527895 5.39646C0.592193 5.34886 0.670025 5.32308 0.750022 5.32287H4.50893L5.6433 1.83185C5.66774 1.75648 5.71542 1.69079 5.77951 1.6442C5.84359 1.59761 5.92079 1.57251 6.00002 1.57251C6.07925 1.57251 6.15645 1.59761 6.22054 1.6442C6.28462 1.69079 6.3323 1.75648 6.35674 1.83185L7.49112 5.32404H11.25C11.3301 5.324 11.4081 5.34961 11.4726 5.39711C11.5371 5.44461 11.5847 5.51152 11.6084 5.58803C11.6321 5.66453 11.6307 5.74662 11.6044 5.82227C11.5781 5.89792 11.5282 5.96315 11.4621 6.00841L8.41408 8.0967L9.58901 11.5779C9.60804 11.6342 9.6134 11.6943 9.60463 11.7531C9.59586 11.812 9.57322 11.8679 9.53857 11.9163C9.50393 11.9646 9.45827 12.004 9.40539 12.0313C9.3525 12.0585 9.29389 12.0728 9.2344 12.0729Z" fill="#FF859B"/>
            </g>
            <defs>
              <clipPath id="clip0_305_403">
                <rect width="12" height="12" fill="white" transform="translate(0 0.822693)"/>
              </clipPath>
            </defs>
          </svg>

          <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_305_406)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.99997 1.57269C6.16242 1.57269 6.30639 1.67729 6.3566 1.83179L7.49115 5.32269H11.25C11.4143 5.32269 11.5595 5.4297 11.6082 5.58668C11.6568 5.74366 11.5976 5.91402 11.462 6.00697L8.41474 8.09655L9.58965 11.5778C9.64182 11.7324 9.58806 11.903 9.45667 11.9997C9.32527 12.0964 9.14642 12.0971 9.0143 12.0013L5.99997 9.81705L2.98563 12.0013C2.85352 12.0971 2.67466 12.0964 2.54327 11.9997C2.41188 11.903 2.35811 11.7324 2.41028 11.5778L3.5852 8.09655L0.537894 6.00697C0.402354 5.91402 0.343124 5.74366 0.391775 5.58668C0.440427 5.4297 0.585622 5.32269 0.749967 5.32269H4.50878L5.64333 1.83179C5.69354 1.67729 5.83752 1.57269 5.99997 1.57269ZM5.99997 3.16095L5.13785 5.8136C5.08764 5.9681 4.94367 6.07269 4.78122 6.07269H1.95994L4.24329 7.63842C4.38169 7.73332 4.44019 7.90861 4.38653 8.06761L3.4964 10.705L5.77993 9.05029C5.9112 8.95516 6.08873 8.95516 6.22001 9.05029L8.50353 10.705L7.61341 8.06761C7.55975 7.90861 7.61825 7.73332 7.75664 7.63842L10.04 6.07269H7.21872C7.05627 6.07269 6.91229 5.9681 6.86208 5.8136L5.99997 3.16095Z" fill="#FF859B"/>
          </g>
          <defs>
            <clipPath id="clip0_305_406">
            <rect width="12" height="12" fill="white" transform="translate(0 0.822693)"/>
            </clipPath>
          </defs>
          </svg>

          <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_305_406)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.99997 1.57269C6.16242 1.57269 6.30639 1.67729 6.3566 1.83179L7.49115 5.32269H11.25C11.4143 5.32269 11.5595 5.4297 11.6082 5.58668C11.6568 5.74366 11.5976 5.91402 11.462 6.00697L8.41474 8.09655L9.58965 11.5778C9.64182 11.7324 9.58806 11.903 9.45667 11.9997C9.32527 12.0964 9.14642 12.0971 9.0143 12.0013L5.99997 9.81705L2.98563 12.0013C2.85352 12.0971 2.67466 12.0964 2.54327 11.9997C2.41188 11.903 2.35811 11.7324 2.41028 11.5778L3.5852 8.09655L0.537894 6.00697C0.402354 5.91402 0.343124 5.74366 0.391775 5.58668C0.440427 5.4297 0.585622 5.32269 0.749967 5.32269H4.50878L5.64333 1.83179C5.69354 1.67729 5.83752 1.57269 5.99997 1.57269ZM5.99997 3.16095L5.13785 5.8136C5.08764 5.9681 4.94367 6.07269 4.78122 6.07269H1.95994L4.24329 7.63842C4.38169 7.73332 4.44019 7.90861 4.38653 8.06761L3.4964 10.705L5.77993 9.05029C5.9112 8.95516 6.08873 8.95516 6.22001 9.05029L8.50353 10.705L7.61341 8.06761C7.55975 7.90861 7.61825 7.73332 7.75664 7.63842L10.04 6.07269H7.21872C7.05627 6.07269 6.91229 5.9681 6.86208 5.8136L5.99997 3.16095Z" fill="#FF859B"/>
          </g>
          <defs>
            <clipPath id="clip0_305_406">
            <rect width="12" height="12" fill="white" transform="translate(0 0.822693)"/>
            </clipPath>
          </defs>
          </svg>

          <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_305_406)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.99997 1.57269C6.16242 1.57269 6.30639 1.67729 6.3566 1.83179L7.49115 5.32269H11.25C11.4143 5.32269 11.5595 5.4297 11.6082 5.58668C11.6568 5.74366 11.5976 5.91402 11.462 6.00697L8.41474 8.09655L9.58965 11.5778C9.64182 11.7324 9.58806 11.903 9.45667 11.9997C9.32527 12.0964 9.14642 12.0971 9.0143 12.0013L5.99997 9.81705L2.98563 12.0013C2.85352 12.0971 2.67466 12.0964 2.54327 11.9997C2.41188 11.903 2.35811 11.7324 2.41028 11.5778L3.5852 8.09655L0.537894 6.00697C0.402354 5.91402 0.343124 5.74366 0.391775 5.58668C0.440427 5.4297 0.585622 5.32269 0.749967 5.32269H4.50878L5.64333 1.83179C5.69354 1.67729 5.83752 1.57269 5.99997 1.57269ZM5.99997 3.16095L5.13785 5.8136C5.08764 5.9681 4.94367 6.07269 4.78122 6.07269H1.95994L4.24329 7.63842C4.38169 7.73332 4.44019 7.90861 4.38653 8.06761L3.4964 10.705L5.77993 9.05029C5.9112 8.95516 6.08873 8.95516 6.22001 9.05029L8.50353 10.705L7.61341 8.06761C7.55975 7.90861 7.61825 7.73332 7.75664 7.63842L10.04 6.07269H7.21872C7.05627 6.07269 6.91229 5.9681 6.86208 5.8136L5.99997 3.16095Z" fill="#FF859B"/>
          </g>
          <defs>
            <clipPath id="clip0_305_406">
            <rect width="12" height="12" fill="white" transform="translate(0 0.822693)"/>
            </clipPath>
          </defs>
          </svg>

          <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_305_406)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.99997 1.57269C6.16242 1.57269 6.30639 1.67729 6.3566 1.83179L7.49115 5.32269H11.25C11.4143 5.32269 11.5595 5.4297 11.6082 5.58668C11.6568 5.74366 11.5976 5.91402 11.462 6.00697L8.41474 8.09655L9.58965 11.5778C9.64182 11.7324 9.58806 11.903 9.45667 11.9997C9.32527 12.0964 9.14642 12.0971 9.0143 12.0013L5.99997 9.81705L2.98563 12.0013C2.85352 12.0971 2.67466 12.0964 2.54327 11.9997C2.41188 11.903 2.35811 11.7324 2.41028 11.5778L3.5852 8.09655L0.537894 6.00697C0.402354 5.91402 0.343124 5.74366 0.391775 5.58668C0.440427 5.4297 0.585622 5.32269 0.749967 5.32269H4.50878L5.64333 1.83179C5.69354 1.67729 5.83752 1.57269 5.99997 1.57269ZM5.99997 3.16095L5.13785 5.8136C5.08764 5.9681 4.94367 6.07269 4.78122 6.07269H1.95994L4.24329 7.63842C4.38169 7.73332 4.44019 7.90861 4.38653 8.06761L3.4964 10.705L5.77993 9.05029C5.9112 8.95516 6.08873 8.95516 6.22001 9.05029L8.50353 10.705L7.61341 8.06761C7.55975 7.90861 7.61825 7.73332 7.75664 7.63842L10.04 6.07269H7.21872C7.05627 6.07269 6.91229 5.9681 6.86208 5.8136L5.99997 3.16095Z" fill="#FF859B"/>
          </g>
          <defs>
            <clipPath id="clip0_305_406">
            <rect width="12" height="12" fill="white" transform="translate(0 0.822693)"/>
            </clipPath>
          </defs>
          </svg>
      
        </div>
      }
      
      {data.rating == "2" && 
        <div>
      
          <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_305_403)">
              <path d="M9.2344 12.0729C9.15547 12.0732 9.07845 12.0486 9.01432 12.0026L6.00002 9.81724L2.98572 12.0026C2.92133 12.0493 2.84374 12.0743 2.76419 12.074C2.68464 12.0737 2.60723 12.0481 2.54318 12.0009C2.47912 11.9538 2.43173 11.8874 2.40785 11.8116C2.38396 11.7357 2.38484 11.6542 2.41033 11.5788L3.58596 8.0967L0.539084 6.00724C0.473087 5.96203 0.423276 5.89691 0.396929 5.82137C0.370582 5.74584 0.36908 5.66386 0.392643 5.58741C0.416206 5.51096 0.463598 5.44405 0.527895 5.39646C0.592193 5.34886 0.670025 5.32308 0.750022 5.32287H4.50893L5.6433 1.83185C5.66774 1.75648 5.71542 1.69079 5.77951 1.6442C5.84359 1.59761 5.92079 1.57251 6.00002 1.57251C6.07925 1.57251 6.15645 1.59761 6.22054 1.6442C6.28462 1.69079 6.3323 1.75648 6.35674 1.83185L7.49112 5.32404H11.25C11.3301 5.324 11.4081 5.34961 11.4726 5.39711C11.5371 5.44461 11.5847 5.51152 11.6084 5.58803C11.6321 5.66453 11.6307 5.74662 11.6044 5.82227C11.5781 5.89792 11.5282 5.96315 11.4621 6.00841L8.41408 8.0967L9.58901 11.5779C9.60804 11.6342 9.6134 11.6943 9.60463 11.7531C9.59586 11.812 9.57322 11.8679 9.53857 11.9163C9.50393 11.9646 9.45827 12.004 9.40539 12.0313C9.3525 12.0585 9.29389 12.0728 9.2344 12.0729Z" fill="#FF859B"/>
            </g>
            <defs>
              <clipPath id="clip0_305_403">
                <rect width="12" height="12" fill="white" transform="translate(0 0.822693)"/>
              </clipPath>
            </defs>
          </svg>

          <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_305_403)">
              <path d="M9.2344 12.0729C9.15547 12.0732 9.07845 12.0486 9.01432 12.0026L6.00002 9.81724L2.98572 12.0026C2.92133 12.0493 2.84374 12.0743 2.76419 12.074C2.68464 12.0737 2.60723 12.0481 2.54318 12.0009C2.47912 11.9538 2.43173 11.8874 2.40785 11.8116C2.38396 11.7357 2.38484 11.6542 2.41033 11.5788L3.58596 8.0967L0.539084 6.00724C0.473087 5.96203 0.423276 5.89691 0.396929 5.82137C0.370582 5.74584 0.36908 5.66386 0.392643 5.58741C0.416206 5.51096 0.463598 5.44405 0.527895 5.39646C0.592193 5.34886 0.670025 5.32308 0.750022 5.32287H4.50893L5.6433 1.83185C5.66774 1.75648 5.71542 1.69079 5.77951 1.6442C5.84359 1.59761 5.92079 1.57251 6.00002 1.57251C6.07925 1.57251 6.15645 1.59761 6.22054 1.6442C6.28462 1.69079 6.3323 1.75648 6.35674 1.83185L7.49112 5.32404H11.25C11.3301 5.324 11.4081 5.34961 11.4726 5.39711C11.5371 5.44461 11.5847 5.51152 11.6084 5.58803C11.6321 5.66453 11.6307 5.74662 11.6044 5.82227C11.5781 5.89792 11.5282 5.96315 11.4621 6.00841L8.41408 8.0967L9.58901 11.5779C9.60804 11.6342 9.6134 11.6943 9.60463 11.7531C9.59586 11.812 9.57322 11.8679 9.53857 11.9163C9.50393 11.9646 9.45827 12.004 9.40539 12.0313C9.3525 12.0585 9.29389 12.0728 9.2344 12.0729Z" fill="#FF859B"/>
            </g>
            <defs>
              <clipPath id="clip0_305_403">
                <rect width="12" height="12" fill="white" transform="translate(0 0.822693)"/>
              </clipPath>
            </defs>
          </svg>

          <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_305_406)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.99997 1.57269C6.16242 1.57269 6.30639 1.67729 6.3566 1.83179L7.49115 5.32269H11.25C11.4143 5.32269 11.5595 5.4297 11.6082 5.58668C11.6568 5.74366 11.5976 5.91402 11.462 6.00697L8.41474 8.09655L9.58965 11.5778C9.64182 11.7324 9.58806 11.903 9.45667 11.9997C9.32527 12.0964 9.14642 12.0971 9.0143 12.0013L5.99997 9.81705L2.98563 12.0013C2.85352 12.0971 2.67466 12.0964 2.54327 11.9997C2.41188 11.903 2.35811 11.7324 2.41028 11.5778L3.5852 8.09655L0.537894 6.00697C0.402354 5.91402 0.343124 5.74366 0.391775 5.58668C0.440427 5.4297 0.585622 5.32269 0.749967 5.32269H4.50878L5.64333 1.83179C5.69354 1.67729 5.83752 1.57269 5.99997 1.57269ZM5.99997 3.16095L5.13785 5.8136C5.08764 5.9681 4.94367 6.07269 4.78122 6.07269H1.95994L4.24329 7.63842C4.38169 7.73332 4.44019 7.90861 4.38653 8.06761L3.4964 10.705L5.77993 9.05029C5.9112 8.95516 6.08873 8.95516 6.22001 9.05029L8.50353 10.705L7.61341 8.06761C7.55975 7.90861 7.61825 7.73332 7.75664 7.63842L10.04 6.07269H7.21872C7.05627 6.07269 6.91229 5.9681 6.86208 5.8136L5.99997 3.16095Z" fill="#FF859B"/>
          </g>
          <defs>
            <clipPath id="clip0_305_406">
            <rect width="12" height="12" fill="white" transform="translate(0 0.822693)"/>
            </clipPath>
          </defs>
          </svg>

          <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_305_406)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.99997 1.57269C6.16242 1.57269 6.30639 1.67729 6.3566 1.83179L7.49115 5.32269H11.25C11.4143 5.32269 11.5595 5.4297 11.6082 5.58668C11.6568 5.74366 11.5976 5.91402 11.462 6.00697L8.41474 8.09655L9.58965 11.5778C9.64182 11.7324 9.58806 11.903 9.45667 11.9997C9.32527 12.0964 9.14642 12.0971 9.0143 12.0013L5.99997 9.81705L2.98563 12.0013C2.85352 12.0971 2.67466 12.0964 2.54327 11.9997C2.41188 11.903 2.35811 11.7324 2.41028 11.5778L3.5852 8.09655L0.537894 6.00697C0.402354 5.91402 0.343124 5.74366 0.391775 5.58668C0.440427 5.4297 0.585622 5.32269 0.749967 5.32269H4.50878L5.64333 1.83179C5.69354 1.67729 5.83752 1.57269 5.99997 1.57269ZM5.99997 3.16095L5.13785 5.8136C5.08764 5.9681 4.94367 6.07269 4.78122 6.07269H1.95994L4.24329 7.63842C4.38169 7.73332 4.44019 7.90861 4.38653 8.06761L3.4964 10.705L5.77993 9.05029C5.9112 8.95516 6.08873 8.95516 6.22001 9.05029L8.50353 10.705L7.61341 8.06761C7.55975 7.90861 7.61825 7.73332 7.75664 7.63842L10.04 6.07269H7.21872C7.05627 6.07269 6.91229 5.9681 6.86208 5.8136L5.99997 3.16095Z" fill="#FF859B"/>
          </g>
          <defs>
            <clipPath id="clip0_305_406">
            <rect width="12" height="12" fill="white" transform="translate(0 0.822693)"/>
            </clipPath>
          </defs>
          </svg>

          <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_305_406)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.99997 1.57269C6.16242 1.57269 6.30639 1.67729 6.3566 1.83179L7.49115 5.32269H11.25C11.4143 5.32269 11.5595 5.4297 11.6082 5.58668C11.6568 5.74366 11.5976 5.91402 11.462 6.00697L8.41474 8.09655L9.58965 11.5778C9.64182 11.7324 9.58806 11.903 9.45667 11.9997C9.32527 12.0964 9.14642 12.0971 9.0143 12.0013L5.99997 9.81705L2.98563 12.0013C2.85352 12.0971 2.67466 12.0964 2.54327 11.9997C2.41188 11.903 2.35811 11.7324 2.41028 11.5778L3.5852 8.09655L0.537894 6.00697C0.402354 5.91402 0.343124 5.74366 0.391775 5.58668C0.440427 5.4297 0.585622 5.32269 0.749967 5.32269H4.50878L5.64333 1.83179C5.69354 1.67729 5.83752 1.57269 5.99997 1.57269ZM5.99997 3.16095L5.13785 5.8136C5.08764 5.9681 4.94367 6.07269 4.78122 6.07269H1.95994L4.24329 7.63842C4.38169 7.73332 4.44019 7.90861 4.38653 8.06761L3.4964 10.705L5.77993 9.05029C5.9112 8.95516 6.08873 8.95516 6.22001 9.05029L8.50353 10.705L7.61341 8.06761C7.55975 7.90861 7.61825 7.73332 7.75664 7.63842L10.04 6.07269H7.21872C7.05627 6.07269 6.91229 5.9681 6.86208 5.8136L5.99997 3.16095Z" fill="#FF859B"/>
          </g>
          <defs>
            <clipPath id="clip0_305_406">
            <rect width="12" height="12" fill="white" transform="translate(0 0.822693)"/>
            </clipPath>
          </defs>
          </svg>
      
        </div>
      }

      {data.rating == "3" && 
        <div>
      
          <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_305_403)">
              <path d="M9.2344 12.0729C9.15547 12.0732 9.07845 12.0486 9.01432 12.0026L6.00002 9.81724L2.98572 12.0026C2.92133 12.0493 2.84374 12.0743 2.76419 12.074C2.68464 12.0737 2.60723 12.0481 2.54318 12.0009C2.47912 11.9538 2.43173 11.8874 2.40785 11.8116C2.38396 11.7357 2.38484 11.6542 2.41033 11.5788L3.58596 8.0967L0.539084 6.00724C0.473087 5.96203 0.423276 5.89691 0.396929 5.82137C0.370582 5.74584 0.36908 5.66386 0.392643 5.58741C0.416206 5.51096 0.463598 5.44405 0.527895 5.39646C0.592193 5.34886 0.670025 5.32308 0.750022 5.32287H4.50893L5.6433 1.83185C5.66774 1.75648 5.71542 1.69079 5.77951 1.6442C5.84359 1.59761 5.92079 1.57251 6.00002 1.57251C6.07925 1.57251 6.15645 1.59761 6.22054 1.6442C6.28462 1.69079 6.3323 1.75648 6.35674 1.83185L7.49112 5.32404H11.25C11.3301 5.324 11.4081 5.34961 11.4726 5.39711C11.5371 5.44461 11.5847 5.51152 11.6084 5.58803C11.6321 5.66453 11.6307 5.74662 11.6044 5.82227C11.5781 5.89792 11.5282 5.96315 11.4621 6.00841L8.41408 8.0967L9.58901 11.5779C9.60804 11.6342 9.6134 11.6943 9.60463 11.7531C9.59586 11.812 9.57322 11.8679 9.53857 11.9163C9.50393 11.9646 9.45827 12.004 9.40539 12.0313C9.3525 12.0585 9.29389 12.0728 9.2344 12.0729Z" fill="#FF859B"/>
            </g>
            <defs>
              <clipPath id="clip0_305_403">
                <rect width="12" height="12" fill="white" transform="translate(0 0.822693)"/>
              </clipPath>
            </defs>
          </svg>

          <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_305_403)">
              <path d="M9.2344 12.0729C9.15547 12.0732 9.07845 12.0486 9.01432 12.0026L6.00002 9.81724L2.98572 12.0026C2.92133 12.0493 2.84374 12.0743 2.76419 12.074C2.68464 12.0737 2.60723 12.0481 2.54318 12.0009C2.47912 11.9538 2.43173 11.8874 2.40785 11.8116C2.38396 11.7357 2.38484 11.6542 2.41033 11.5788L3.58596 8.0967L0.539084 6.00724C0.473087 5.96203 0.423276 5.89691 0.396929 5.82137C0.370582 5.74584 0.36908 5.66386 0.392643 5.58741C0.416206 5.51096 0.463598 5.44405 0.527895 5.39646C0.592193 5.34886 0.670025 5.32308 0.750022 5.32287H4.50893L5.6433 1.83185C5.66774 1.75648 5.71542 1.69079 5.77951 1.6442C5.84359 1.59761 5.92079 1.57251 6.00002 1.57251C6.07925 1.57251 6.15645 1.59761 6.22054 1.6442C6.28462 1.69079 6.3323 1.75648 6.35674 1.83185L7.49112 5.32404H11.25C11.3301 5.324 11.4081 5.34961 11.4726 5.39711C11.5371 5.44461 11.5847 5.51152 11.6084 5.58803C11.6321 5.66453 11.6307 5.74662 11.6044 5.82227C11.5781 5.89792 11.5282 5.96315 11.4621 6.00841L8.41408 8.0967L9.58901 11.5779C9.60804 11.6342 9.6134 11.6943 9.60463 11.7531C9.59586 11.812 9.57322 11.8679 9.53857 11.9163C9.50393 11.9646 9.45827 12.004 9.40539 12.0313C9.3525 12.0585 9.29389 12.0728 9.2344 12.0729Z" fill="#FF859B"/>
            </g>
            <defs>
              <clipPath id="clip0_305_403">
                <rect width="12" height="12" fill="white" transform="translate(0 0.822693)"/>
              </clipPath>
            </defs>
          </svg>

          <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_305_403)">
              <path d="M9.2344 12.0729C9.15547 12.0732 9.07845 12.0486 9.01432 12.0026L6.00002 9.81724L2.98572 12.0026C2.92133 12.0493 2.84374 12.0743 2.76419 12.074C2.68464 12.0737 2.60723 12.0481 2.54318 12.0009C2.47912 11.9538 2.43173 11.8874 2.40785 11.8116C2.38396 11.7357 2.38484 11.6542 2.41033 11.5788L3.58596 8.0967L0.539084 6.00724C0.473087 5.96203 0.423276 5.89691 0.396929 5.82137C0.370582 5.74584 0.36908 5.66386 0.392643 5.58741C0.416206 5.51096 0.463598 5.44405 0.527895 5.39646C0.592193 5.34886 0.670025 5.32308 0.750022 5.32287H4.50893L5.6433 1.83185C5.66774 1.75648 5.71542 1.69079 5.77951 1.6442C5.84359 1.59761 5.92079 1.57251 6.00002 1.57251C6.07925 1.57251 6.15645 1.59761 6.22054 1.6442C6.28462 1.69079 6.3323 1.75648 6.35674 1.83185L7.49112 5.32404H11.25C11.3301 5.324 11.4081 5.34961 11.4726 5.39711C11.5371 5.44461 11.5847 5.51152 11.6084 5.58803C11.6321 5.66453 11.6307 5.74662 11.6044 5.82227C11.5781 5.89792 11.5282 5.96315 11.4621 6.00841L8.41408 8.0967L9.58901 11.5779C9.60804 11.6342 9.6134 11.6943 9.60463 11.7531C9.59586 11.812 9.57322 11.8679 9.53857 11.9163C9.50393 11.9646 9.45827 12.004 9.40539 12.0313C9.3525 12.0585 9.29389 12.0728 9.2344 12.0729Z" fill="#FF859B"/>
            </g>
            <defs>
              <clipPath id="clip0_305_403">
                <rect width="12" height="12" fill="white" transform="translate(0 0.822693)"/>
              </clipPath>
            </defs>
          </svg>

          <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_305_406)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.99997 1.57269C6.16242 1.57269 6.30639 1.67729 6.3566 1.83179L7.49115 5.32269H11.25C11.4143 5.32269 11.5595 5.4297 11.6082 5.58668C11.6568 5.74366 11.5976 5.91402 11.462 6.00697L8.41474 8.09655L9.58965 11.5778C9.64182 11.7324 9.58806 11.903 9.45667 11.9997C9.32527 12.0964 9.14642 12.0971 9.0143 12.0013L5.99997 9.81705L2.98563 12.0013C2.85352 12.0971 2.67466 12.0964 2.54327 11.9997C2.41188 11.903 2.35811 11.7324 2.41028 11.5778L3.5852 8.09655L0.537894 6.00697C0.402354 5.91402 0.343124 5.74366 0.391775 5.58668C0.440427 5.4297 0.585622 5.32269 0.749967 5.32269H4.50878L5.64333 1.83179C5.69354 1.67729 5.83752 1.57269 5.99997 1.57269ZM5.99997 3.16095L5.13785 5.8136C5.08764 5.9681 4.94367 6.07269 4.78122 6.07269H1.95994L4.24329 7.63842C4.38169 7.73332 4.44019 7.90861 4.38653 8.06761L3.4964 10.705L5.77993 9.05029C5.9112 8.95516 6.08873 8.95516 6.22001 9.05029L8.50353 10.705L7.61341 8.06761C7.55975 7.90861 7.61825 7.73332 7.75664 7.63842L10.04 6.07269H7.21872C7.05627 6.07269 6.91229 5.9681 6.86208 5.8136L5.99997 3.16095Z" fill="#FF859B"/>
          </g>
          <defs>
            <clipPath id="clip0_305_406">
            <rect width="12" height="12" fill="white" transform="translate(0 0.822693)"/>
            </clipPath>
          </defs>
          </svg>

          <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_305_406)">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M5.99997 1.57269C6.16242 1.57269 6.30639 1.67729 6.3566 1.83179L7.49115 5.32269H11.25C11.4143 5.32269 11.5595 5.4297 11.6082 5.58668C11.6568 5.74366 11.5976 5.91402 11.462 6.00697L8.41474 8.09655L9.58965 11.5778C9.64182 11.7324 9.58806 11.903 9.45667 11.9997C9.32527 12.0964 9.14642 12.0971 9.0143 12.0013L5.99997 9.81705L2.98563 12.0013C2.85352 12.0971 2.67466 12.0964 2.54327 11.9997C2.41188 11.903 2.35811 11.7324 2.41028 11.5778L3.5852 8.09655L0.537894 6.00697C0.402354 5.91402 0.343124 5.74366 0.391775 5.58668C0.440427 5.4297 0.585622 5.32269 0.749967 5.32269H4.50878L5.64333 1.83179C5.69354 1.67729 5.83752 1.57269 5.99997 1.57269ZM5.99997 3.16095L5.13785 5.8136C5.08764 5.9681 4.94367 6.07269 4.78122 6.07269H1.95994L4.24329 7.63842C4.38169 7.73332 4.44019 7.90861 4.38653 8.06761L3.4964 10.705L5.77993 9.05029C5.9112 8.95516 6.08873 8.95516 6.22001 9.05029L8.50353 10.705L7.61341 8.06761C7.55975 7.90861 7.61825 7.73332 7.75664 7.63842L10.04 6.07269H7.21872C7.05627 6.07269 6.91229 5.9681 6.86208 5.8136L5.99997 3.16095Z" fill="#FF859B"/>
            </g>
            <defs>
              <clipPath id="clip0_305_406">
               <rect width="12" height="12" fill="white" transform="translate(0 0.822693)"/>
              </clipPath>
            </defs>
          </svg>
      
        </div>
      }

      {data.rating == "4" && 
        <div>
      
          <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_305_403)">
              <path d="M9.2344 12.0729C9.15547 12.0732 9.07845 12.0486 9.01432 12.0026L6.00002 9.81724L2.98572 12.0026C2.92133 12.0493 2.84374 12.0743 2.76419 12.074C2.68464 12.0737 2.60723 12.0481 2.54318 12.0009C2.47912 11.9538 2.43173 11.8874 2.40785 11.8116C2.38396 11.7357 2.38484 11.6542 2.41033 11.5788L3.58596 8.0967L0.539084 6.00724C0.473087 5.96203 0.423276 5.89691 0.396929 5.82137C0.370582 5.74584 0.36908 5.66386 0.392643 5.58741C0.416206 5.51096 0.463598 5.44405 0.527895 5.39646C0.592193 5.34886 0.670025 5.32308 0.750022 5.32287H4.50893L5.6433 1.83185C5.66774 1.75648 5.71542 1.69079 5.77951 1.6442C5.84359 1.59761 5.92079 1.57251 6.00002 1.57251C6.07925 1.57251 6.15645 1.59761 6.22054 1.6442C6.28462 1.69079 6.3323 1.75648 6.35674 1.83185L7.49112 5.32404H11.25C11.3301 5.324 11.4081 5.34961 11.4726 5.39711C11.5371 5.44461 11.5847 5.51152 11.6084 5.58803C11.6321 5.66453 11.6307 5.74662 11.6044 5.82227C11.5781 5.89792 11.5282 5.96315 11.4621 6.00841L8.41408 8.0967L9.58901 11.5779C9.60804 11.6342 9.6134 11.6943 9.60463 11.7531C9.59586 11.812 9.57322 11.8679 9.53857 11.9163C9.50393 11.9646 9.45827 12.004 9.40539 12.0313C9.3525 12.0585 9.29389 12.0728 9.2344 12.0729Z" fill="#FF859B"/>
            </g>
            <defs>
              <clipPath id="clip0_305_403">
                <rect width="12" height="12" fill="white" transform="translate(0 0.822693)"/>
              </clipPath>
            </defs>
          </svg>

          <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_305_403)">
              <path d="M9.2344 12.0729C9.15547 12.0732 9.07845 12.0486 9.01432 12.0026L6.00002 9.81724L2.98572 12.0026C2.92133 12.0493 2.84374 12.0743 2.76419 12.074C2.68464 12.0737 2.60723 12.0481 2.54318 12.0009C2.47912 11.9538 2.43173 11.8874 2.40785 11.8116C2.38396 11.7357 2.38484 11.6542 2.41033 11.5788L3.58596 8.0967L0.539084 6.00724C0.473087 5.96203 0.423276 5.89691 0.396929 5.82137C0.370582 5.74584 0.36908 5.66386 0.392643 5.58741C0.416206 5.51096 0.463598 5.44405 0.527895 5.39646C0.592193 5.34886 0.670025 5.32308 0.750022 5.32287H4.50893L5.6433 1.83185C5.66774 1.75648 5.71542 1.69079 5.77951 1.6442C5.84359 1.59761 5.92079 1.57251 6.00002 1.57251C6.07925 1.57251 6.15645 1.59761 6.22054 1.6442C6.28462 1.69079 6.3323 1.75648 6.35674 1.83185L7.49112 5.32404H11.25C11.3301 5.324 11.4081 5.34961 11.4726 5.39711C11.5371 5.44461 11.5847 5.51152 11.6084 5.58803C11.6321 5.66453 11.6307 5.74662 11.6044 5.82227C11.5781 5.89792 11.5282 5.96315 11.4621 6.00841L8.41408 8.0967L9.58901 11.5779C9.60804 11.6342 9.6134 11.6943 9.60463 11.7531C9.59586 11.812 9.57322 11.8679 9.53857 11.9163C9.50393 11.9646 9.45827 12.004 9.40539 12.0313C9.3525 12.0585 9.29389 12.0728 9.2344 12.0729Z" fill="#FF859B"/>
            </g>
            <defs>
              <clipPath id="clip0_305_403">
                <rect width="12" height="12" fill="white" transform="translate(0 0.822693)"/>
              </clipPath>
            </defs>
          </svg>

          <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_305_403)">
              <path d="M9.2344 12.0729C9.15547 12.0732 9.07845 12.0486 9.01432 12.0026L6.00002 9.81724L2.98572 12.0026C2.92133 12.0493 2.84374 12.0743 2.76419 12.074C2.68464 12.0737 2.60723 12.0481 2.54318 12.0009C2.47912 11.9538 2.43173 11.8874 2.40785 11.8116C2.38396 11.7357 2.38484 11.6542 2.41033 11.5788L3.58596 8.0967L0.539084 6.00724C0.473087 5.96203 0.423276 5.89691 0.396929 5.82137C0.370582 5.74584 0.36908 5.66386 0.392643 5.58741C0.416206 5.51096 0.463598 5.44405 0.527895 5.39646C0.592193 5.34886 0.670025 5.32308 0.750022 5.32287H4.50893L5.6433 1.83185C5.66774 1.75648 5.71542 1.69079 5.77951 1.6442C5.84359 1.59761 5.92079 1.57251 6.00002 1.57251C6.07925 1.57251 6.15645 1.59761 6.22054 1.6442C6.28462 1.69079 6.3323 1.75648 6.35674 1.83185L7.49112 5.32404H11.25C11.3301 5.324 11.4081 5.34961 11.4726 5.39711C11.5371 5.44461 11.5847 5.51152 11.6084 5.58803C11.6321 5.66453 11.6307 5.74662 11.6044 5.82227C11.5781 5.89792 11.5282 5.96315 11.4621 6.00841L8.41408 8.0967L9.58901 11.5779C9.60804 11.6342 9.6134 11.6943 9.60463 11.7531C9.59586 11.812 9.57322 11.8679 9.53857 11.9163C9.50393 11.9646 9.45827 12.004 9.40539 12.0313C9.3525 12.0585 9.29389 12.0728 9.2344 12.0729Z" fill="#FF859B"/>
            </g>
            <defs>
              <clipPath id="clip0_305_403">
                <rect width="12" height="12" fill="white" transform="translate(0 0.822693)"/>
              </clipPath>
            </defs>
          </svg>

          <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_305_403)">
              <path d="M9.2344 12.0729C9.15547 12.0732 9.07845 12.0486 9.01432 12.0026L6.00002 9.81724L2.98572 12.0026C2.92133 12.0493 2.84374 12.0743 2.76419 12.074C2.68464 12.0737 2.60723 12.0481 2.54318 12.0009C2.47912 11.9538 2.43173 11.8874 2.40785 11.8116C2.38396 11.7357 2.38484 11.6542 2.41033 11.5788L3.58596 8.0967L0.539084 6.00724C0.473087 5.96203 0.423276 5.89691 0.396929 5.82137C0.370582 5.74584 0.36908 5.66386 0.392643 5.58741C0.416206 5.51096 0.463598 5.44405 0.527895 5.39646C0.592193 5.34886 0.670025 5.32308 0.750022 5.32287H4.50893L5.6433 1.83185C5.66774 1.75648 5.71542 1.69079 5.77951 1.6442C5.84359 1.59761 5.92079 1.57251 6.00002 1.57251C6.07925 1.57251 6.15645 1.59761 6.22054 1.6442C6.28462 1.69079 6.3323 1.75648 6.35674 1.83185L7.49112 5.32404H11.25C11.3301 5.324 11.4081 5.34961 11.4726 5.39711C11.5371 5.44461 11.5847 5.51152 11.6084 5.58803C11.6321 5.66453 11.6307 5.74662 11.6044 5.82227C11.5781 5.89792 11.5282 5.96315 11.4621 6.00841L8.41408 8.0967L9.58901 11.5779C9.60804 11.6342 9.6134 11.6943 9.60463 11.7531C9.59586 11.812 9.57322 11.8679 9.53857 11.9163C9.50393 11.9646 9.45827 12.004 9.40539 12.0313C9.3525 12.0585 9.29389 12.0728 9.2344 12.0729Z" fill="#FF859B"/>
            </g>
            <defs>
              <clipPath id="clip0_305_403">
                <rect width="12" height="12" fill="white" transform="translate(0 0.822693)"/>
              </clipPath>
            </defs>
          </svg>

          <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_305_406)">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M5.99997 1.57269C6.16242 1.57269 6.30639 1.67729 6.3566 1.83179L7.49115 5.32269H11.25C11.4143 5.32269 11.5595 5.4297 11.6082 5.58668C11.6568 5.74366 11.5976 5.91402 11.462 6.00697L8.41474 8.09655L9.58965 11.5778C9.64182 11.7324 9.58806 11.903 9.45667 11.9997C9.32527 12.0964 9.14642 12.0971 9.0143 12.0013L5.99997 9.81705L2.98563 12.0013C2.85352 12.0971 2.67466 12.0964 2.54327 11.9997C2.41188 11.903 2.35811 11.7324 2.41028 11.5778L3.5852 8.09655L0.537894 6.00697C0.402354 5.91402 0.343124 5.74366 0.391775 5.58668C0.440427 5.4297 0.585622 5.32269 0.749967 5.32269H4.50878L5.64333 1.83179C5.69354 1.67729 5.83752 1.57269 5.99997 1.57269ZM5.99997 3.16095L5.13785 5.8136C5.08764 5.9681 4.94367 6.07269 4.78122 6.07269H1.95994L4.24329 7.63842C4.38169 7.73332 4.44019 7.90861 4.38653 8.06761L3.4964 10.705L5.77993 9.05029C5.9112 8.95516 6.08873 8.95516 6.22001 9.05029L8.50353 10.705L7.61341 8.06761C7.55975 7.90861 7.61825 7.73332 7.75664 7.63842L10.04 6.07269H7.21872C7.05627 6.07269 6.91229 5.9681 6.86208 5.8136L5.99997 3.16095Z" fill="#FF859B"/>
            </g>
            <defs>
              <clipPath id="clip0_305_406">
               <rect width="12" height="12" fill="white" transform="translate(0 0.822693)"/>
              </clipPath>
            </defs>
          </svg>
      
        </div>
      }

      {data.rating == "5" && 
        <div>
      
          <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_305_403)">
              <path d="M9.2344 12.0729C9.15547 12.0732 9.07845 12.0486 9.01432 12.0026L6.00002 9.81724L2.98572 12.0026C2.92133 12.0493 2.84374 12.0743 2.76419 12.074C2.68464 12.0737 2.60723 12.0481 2.54318 12.0009C2.47912 11.9538 2.43173 11.8874 2.40785 11.8116C2.38396 11.7357 2.38484 11.6542 2.41033 11.5788L3.58596 8.0967L0.539084 6.00724C0.473087 5.96203 0.423276 5.89691 0.396929 5.82137C0.370582 5.74584 0.36908 5.66386 0.392643 5.58741C0.416206 5.51096 0.463598 5.44405 0.527895 5.39646C0.592193 5.34886 0.670025 5.32308 0.750022 5.32287H4.50893L5.6433 1.83185C5.66774 1.75648 5.71542 1.69079 5.77951 1.6442C5.84359 1.59761 5.92079 1.57251 6.00002 1.57251C6.07925 1.57251 6.15645 1.59761 6.22054 1.6442C6.28462 1.69079 6.3323 1.75648 6.35674 1.83185L7.49112 5.32404H11.25C11.3301 5.324 11.4081 5.34961 11.4726 5.39711C11.5371 5.44461 11.5847 5.51152 11.6084 5.58803C11.6321 5.66453 11.6307 5.74662 11.6044 5.82227C11.5781 5.89792 11.5282 5.96315 11.4621 6.00841L8.41408 8.0967L9.58901 11.5779C9.60804 11.6342 9.6134 11.6943 9.60463 11.7531C9.59586 11.812 9.57322 11.8679 9.53857 11.9163C9.50393 11.9646 9.45827 12.004 9.40539 12.0313C9.3525 12.0585 9.29389 12.0728 9.2344 12.0729Z" fill="#FF859B"/>
            </g>
            <defs>
              <clipPath id="clip0_305_403">
                <rect width="12" height="12" fill="white" transform="translate(0 0.822693)"/>
              </clipPath>
            </defs>
          </svg>

          <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_305_403)">
              <path d="M9.2344 12.0729C9.15547 12.0732 9.07845 12.0486 9.01432 12.0026L6.00002 9.81724L2.98572 12.0026C2.92133 12.0493 2.84374 12.0743 2.76419 12.074C2.68464 12.0737 2.60723 12.0481 2.54318 12.0009C2.47912 11.9538 2.43173 11.8874 2.40785 11.8116C2.38396 11.7357 2.38484 11.6542 2.41033 11.5788L3.58596 8.0967L0.539084 6.00724C0.473087 5.96203 0.423276 5.89691 0.396929 5.82137C0.370582 5.74584 0.36908 5.66386 0.392643 5.58741C0.416206 5.51096 0.463598 5.44405 0.527895 5.39646C0.592193 5.34886 0.670025 5.32308 0.750022 5.32287H4.50893L5.6433 1.83185C5.66774 1.75648 5.71542 1.69079 5.77951 1.6442C5.84359 1.59761 5.92079 1.57251 6.00002 1.57251C6.07925 1.57251 6.15645 1.59761 6.22054 1.6442C6.28462 1.69079 6.3323 1.75648 6.35674 1.83185L7.49112 5.32404H11.25C11.3301 5.324 11.4081 5.34961 11.4726 5.39711C11.5371 5.44461 11.5847 5.51152 11.6084 5.58803C11.6321 5.66453 11.6307 5.74662 11.6044 5.82227C11.5781 5.89792 11.5282 5.96315 11.4621 6.00841L8.41408 8.0967L9.58901 11.5779C9.60804 11.6342 9.6134 11.6943 9.60463 11.7531C9.59586 11.812 9.57322 11.8679 9.53857 11.9163C9.50393 11.9646 9.45827 12.004 9.40539 12.0313C9.3525 12.0585 9.29389 12.0728 9.2344 12.0729Z" fill="#FF859B"/>
            </g>
            <defs>
              <clipPath id="clip0_305_403">
                <rect width="12" height="12" fill="white" transform="translate(0 0.822693)"/>
              </clipPath>
            </defs>
          </svg>

          <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_305_403)">
              <path d="M9.2344 12.0729C9.15547 12.0732 9.07845 12.0486 9.01432 12.0026L6.00002 9.81724L2.98572 12.0026C2.92133 12.0493 2.84374 12.0743 2.76419 12.074C2.68464 12.0737 2.60723 12.0481 2.54318 12.0009C2.47912 11.9538 2.43173 11.8874 2.40785 11.8116C2.38396 11.7357 2.38484 11.6542 2.41033 11.5788L3.58596 8.0967L0.539084 6.00724C0.473087 5.96203 0.423276 5.89691 0.396929 5.82137C0.370582 5.74584 0.36908 5.66386 0.392643 5.58741C0.416206 5.51096 0.463598 5.44405 0.527895 5.39646C0.592193 5.34886 0.670025 5.32308 0.750022 5.32287H4.50893L5.6433 1.83185C5.66774 1.75648 5.71542 1.69079 5.77951 1.6442C5.84359 1.59761 5.92079 1.57251 6.00002 1.57251C6.07925 1.57251 6.15645 1.59761 6.22054 1.6442C6.28462 1.69079 6.3323 1.75648 6.35674 1.83185L7.49112 5.32404H11.25C11.3301 5.324 11.4081 5.34961 11.4726 5.39711C11.5371 5.44461 11.5847 5.51152 11.6084 5.58803C11.6321 5.66453 11.6307 5.74662 11.6044 5.82227C11.5781 5.89792 11.5282 5.96315 11.4621 6.00841L8.41408 8.0967L9.58901 11.5779C9.60804 11.6342 9.6134 11.6943 9.60463 11.7531C9.59586 11.812 9.57322 11.8679 9.53857 11.9163C9.50393 11.9646 9.45827 12.004 9.40539 12.0313C9.3525 12.0585 9.29389 12.0728 9.2344 12.0729Z" fill="#FF859B"/>
            </g>
            <defs>
              <clipPath id="clip0_305_403">
                <rect width="12" height="12" fill="white" transform="translate(0 0.822693)"/>
              </clipPath>
            </defs>
          </svg>

          <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_305_403)">
              <path d="M9.2344 12.0729C9.15547 12.0732 9.07845 12.0486 9.01432 12.0026L6.00002 9.81724L2.98572 12.0026C2.92133 12.0493 2.84374 12.0743 2.76419 12.074C2.68464 12.0737 2.60723 12.0481 2.54318 12.0009C2.47912 11.9538 2.43173 11.8874 2.40785 11.8116C2.38396 11.7357 2.38484 11.6542 2.41033 11.5788L3.58596 8.0967L0.539084 6.00724C0.473087 5.96203 0.423276 5.89691 0.396929 5.82137C0.370582 5.74584 0.36908 5.66386 0.392643 5.58741C0.416206 5.51096 0.463598 5.44405 0.527895 5.39646C0.592193 5.34886 0.670025 5.32308 0.750022 5.32287H4.50893L5.6433 1.83185C5.66774 1.75648 5.71542 1.69079 5.77951 1.6442C5.84359 1.59761 5.92079 1.57251 6.00002 1.57251C6.07925 1.57251 6.15645 1.59761 6.22054 1.6442C6.28462 1.69079 6.3323 1.75648 6.35674 1.83185L7.49112 5.32404H11.25C11.3301 5.324 11.4081 5.34961 11.4726 5.39711C11.5371 5.44461 11.5847 5.51152 11.6084 5.58803C11.6321 5.66453 11.6307 5.74662 11.6044 5.82227C11.5781 5.89792 11.5282 5.96315 11.4621 6.00841L8.41408 8.0967L9.58901 11.5779C9.60804 11.6342 9.6134 11.6943 9.60463 11.7531C9.59586 11.812 9.57322 11.8679 9.53857 11.9163C9.50393 11.9646 9.45827 12.004 9.40539 12.0313C9.3525 12.0585 9.29389 12.0728 9.2344 12.0729Z" fill="#FF859B"/>
            </g>
            <defs>
              <clipPath id="clip0_305_403">
                <rect width="12" height="12" fill="white" transform="translate(0 0.822693)"/>
              </clipPath>
            </defs>
          </svg>

          <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_305_403)">
              <path d="M9.2344 12.0729C9.15547 12.0732 9.07845 12.0486 9.01432 12.0026L6.00002 9.81724L2.98572 12.0026C2.92133 12.0493 2.84374 12.0743 2.76419 12.074C2.68464 12.0737 2.60723 12.0481 2.54318 12.0009C2.47912 11.9538 2.43173 11.8874 2.40785 11.8116C2.38396 11.7357 2.38484 11.6542 2.41033 11.5788L3.58596 8.0967L0.539084 6.00724C0.473087 5.96203 0.423276 5.89691 0.396929 5.82137C0.370582 5.74584 0.36908 5.66386 0.392643 5.58741C0.416206 5.51096 0.463598 5.44405 0.527895 5.39646C0.592193 5.34886 0.670025 5.32308 0.750022 5.32287H4.50893L5.6433 1.83185C5.66774 1.75648 5.71542 1.69079 5.77951 1.6442C5.84359 1.59761 5.92079 1.57251 6.00002 1.57251C6.07925 1.57251 6.15645 1.59761 6.22054 1.6442C6.28462 1.69079 6.3323 1.75648 6.35674 1.83185L7.49112 5.32404H11.25C11.3301 5.324 11.4081 5.34961 11.4726 5.39711C11.5371 5.44461 11.5847 5.51152 11.6084 5.58803C11.6321 5.66453 11.6307 5.74662 11.6044 5.82227C11.5781 5.89792 11.5282 5.96315 11.4621 6.00841L8.41408 8.0967L9.58901 11.5779C9.60804 11.6342 9.6134 11.6943 9.60463 11.7531C9.59586 11.812 9.57322 11.8679 9.53857 11.9163C9.50393 11.9646 9.45827 12.004 9.40539 12.0313C9.3525 12.0585 9.29389 12.0728 9.2344 12.0729Z" fill="#FF859B"/>
            </g>
            <defs>
              <clipPath id="clip0_305_403">
                <rect width="12" height="12" fill="white" transform="translate(0 0.822693)"/>
              </clipPath>
            </defs>
          </svg>
      
        </div>
      }

      <p>
        {data.description}
      </p>

      {
        data.tags && 
        <footer>
          {
            data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
          }
        </footer>
      }
    </Container>
  )
}