import L from 'leaflet'

export function placeIcon(emoji: string, selected = false) {
  return L.divIcon({
    className: '',
    iconSize: [40, 48],
    iconAnchor: [20, 44],
    html: `
      <div style="
        position: relative;
        width: 40px; height: 48px;
        display: flex; align-items: flex-start; justify-content: center;
      ">
        <div style="
          width: 36px; height: 36px;
          border-radius: 999px;
          background: ${selected ? '#6C5CE7' : '#16161F'};
          border: 2px solid ${selected ? '#9488FF' : '#26263A'};
          box-shadow: 0 8px 20px -4px rgba(0,0,0,0.6)${selected ? ', 0 0 0 6px rgba(108,92,231,0.18)' : ''};
          display: flex; align-items: center; justify-content: center;
          font-size: 18px;
          transition: transform 200ms ease;
        ">
          ${emoji}
        </div>
        <div style="
          position: absolute; bottom: 2px; left: 50%; transform: translateX(-50%);
          width: 8px; height: 8px;
          background: ${selected ? '#6C5CE7' : '#16161F'};
          border-right: 2px solid ${selected ? '#9488FF' : '#26263A'};
          border-bottom: 2px solid ${selected ? '#9488FF' : '#26263A'};
          transform-origin: center; transform: translateX(-50%) rotate(45deg);
        "></div>
      </div>
    `,
  })
}

export function userIcon() {
  return L.divIcon({
    className: '',
    iconSize: [24, 24],
    iconAnchor: [12, 12],
    html: `
      <div style="position: relative; width: 24px; height: 24px;">
        <div class="pulse-ring" style="
          position: absolute; inset: 0;
          border-radius: 999px;
          background: rgba(108, 92, 231, 0.4);
        "></div>
        <div style="
          position: absolute; inset: 0;
          border-radius: 999px;
          background: #6C5CE7;
          border: 3px solid #FFFFFF;
          box-shadow: 0 4px 12px rgba(108,92,231,0.6);
        "></div>
      </div>
    `,
  })
}
