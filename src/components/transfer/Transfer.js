import React from 'react'
import tokens from '../../images/tokens'
import chevronRight from '../../images/chevron-right-2.svg'
import { uniqueId } from 'lodash-es'

import './Transfer.scss'

export default ({ transfers = [], handleAddressClick }) =>
  !!transfers.length && (
    <div className="transfer-container">
      <div className="transfer-column">
        <div className="bold-subtitle">Sent From</div>
        {transfers.map(transfer => (
          <div key={uniqueId()} className="asset-transfer-detail-container">
            <div
              className="link"
              onClick={() => handleAddressClick(transfer.from)}
            >
              {transfer.from}
            </div>
            <div className="transfer-amount-container">
              <img src={tokens[transfer.name]} alt="token-logo" />{' '}
              {transfer.amount} {transfer.name}
            </div>
          </div>
        ))}
      </div>
      <img id="chevron-right-transfer" src={chevronRight} alt="chevron-right" />
      <div className="transfer-column">
        <div className="bold-subtitle">Sent To</div>
        {transfers.map(transfer => (
          <div key={uniqueId()} className="asset-transfer-detail-container">
            <div
              className="link"
              onClick={() => handleAddressClick(transfer.to)}
            >
              {transfer.to}
            </div>
            <div className="transfer-amount-container">
              <img src={tokens[transfer.name]} alt="token-logo" />{' '}
              {transfer.amount} {transfer.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
