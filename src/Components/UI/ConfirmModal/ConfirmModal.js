import React from 'react'
import BackDrop from '../BackDrop/BackDrop'
import Card from '../Card/Card'
import './ConfirmModal.css'


const ConfirmModal = props => {
    return (
        <BackDrop>
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
        </BackDrop>
    )
}



export default ConfirmModal
