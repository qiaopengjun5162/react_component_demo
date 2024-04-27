import React from 'react'
import Backdrop from '../Backdrop/Backdrop'
import Card from '../Card/Card'
import './ConfirmModal.css'


const ConfirmModal = props => {
    return (
        <Backdrop>
            <Card className="confirm-modal">
                <div className="confirm-modal-text">
                    {/* <p>该操作不可恢复，确认删除吗？</p> */}
                    <p>{props.confirmText}</p>
                </div>
                <div className="confirm-modal-buttons">
                    <button onClick={props.onConfirm}>Confirm</button>
                    <button onClick={props.onCancel}>Cancel</button>

                </div>
            </Card>
        </Backdrop>
    )
}



export default ConfirmModal
