import Swal from "sweetalert2";

export const Carrosel = () => {

    const handleClick = () => {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "",
            showConfirmButton: false,
            timer: 2500,
            width: 200,
            heightAuto: true
        });
    }
    
    return (
        <div>
            <button className="bg-gray-200 p-3 rounded-md m-2" onClick={handleClick}>Alert!</button>
        </div>
    );
}