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
            <button aria-label="Abrir alerta" className="bg-[--brand] text-white p-3 rounded-md m-2 hover:bg-[--brand-dark] transition" onClick={handleClick}>Alert!</button>
        </div>
    );
}