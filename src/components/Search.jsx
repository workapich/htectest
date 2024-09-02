import  { useRef, useState } from "react";
import  { createFilter } from "react-search-input";
import { cities } from "../utils/cities";
import { StyledSearchInput,SuggestionsList,SuggestionItem} from "../styles/components/Search/Search.styled";
import Modal from "react-modal";
import { PrimaryButton } from "../styles/ui/button.styled";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const KEYS_TO_FILTERS = ["name"];

Modal.setAppElement('#root');

const Search = () => {
    const [favorite, setFavorite] = useState([]);

    const toastId = useRef(null);



    const customStyles = {
        overlay:{
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
          
        },
        content: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)', 

          backgroundColor: '#353839',
          color:"#D3D3D3",
          border:"none",
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '30%', 
          height: '30%',
 

    
        },
      };

      const containerStyles = {
        display: 'flex',
        justifyContent: 'center', 
        gap: '10px', 
      };

  const [modalIsOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const filteredCities = cities.filter(createFilter(searchTerm, KEYS_TO_FILTERS));

  function openModal(name) {
    setSelectedCity(name)
    // setSearchTerm('')
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  
  const notify = () => {if(!toast.isActive(toastId.current)) {
if(favorite.some(city => city.id === selectedCity.id))
{
    setFavorite(
        favorite.filter(a =>
          a.id !== selectedCity.id
        )
      );
      toastId.current= toast.success(selectedCity.name + " removed from favorites!");
}
else
{
    setFavorite( 
        [ 
          ...favorite,
          { id: selectedCity.id, name: selectedCity.name } 
        ]
      );
    toastId.current= toast.success(selectedCity.name + " added to favorites!");

}
    
    setIsOpen(false);
    console.log(favorite["id"]);
  }} 


  return (
    <>
    {favorite && favorite.length>0 && (
        <div>

        Fav: {favorite.map((city) => (
<>
            <span>{city.name} 
                {", "}
            </span>
</>

        ))}
    </div>)}
      <StyledSearchInput
      value={searchTerm}
        onChange={setSearchTerm}
        placeholder="Search for a city..."
      />
      {searchTerm.length>3 && filteredCities.length > 0 && (
        <SuggestionsList>
          {filteredCities.map((city) => (
            <SuggestionItem key={city.id} onClick={()=>openModal(city)}>{city.name}</SuggestionItem>
          ))}
        </SuggestionsList>
        
      )}

    <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Modal"
        style={customStyles}

      >
        <h2>{selectedCity.name}</h2>
        <h3>{selectedCity.description}</h3>
        <div style={containerStyles}>
      <PrimaryButton bgcolor="yes" onClick={closeModal}>Close</PrimaryButton>
      <PrimaryButton bgcolor="yes" onClick={notify}>Favorite</PrimaryButton>
    </div>
       
      </Modal>
      <ToastContainer  autoClose={2000}/>

    </>

  );
};


export default Search;
