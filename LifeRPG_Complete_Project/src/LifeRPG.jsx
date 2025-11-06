import React, { useState } from 'react';

const equipmentSlots = {
  weapon: null,
  helmet: null,
  armor: null
};

const rarityColors = {
  일반: 'gray',
  희귀: 'blue',
  에픽: 'purple',
  전설: 'gold'
};

const equipmentList = [
  { name: '무딘칼_일반', type: 'weapon', rarity: '일반' },
  { name: '루비소드_희귀', type: 'weapon', rarity: '희귀' },
  { name: '파멸의검_에픽', type: 'weapon', rarity: '에픽' },
  { name: '아스가르드의빛_전설', type: 'weapon', rarity: '전설' },
  { name: '녹슨 철 투구', type: 'helmet', rarity: '일반' },
  { name: '용기의 투구', type: 'helmet', rarity: '희귀' },
  { name: '검은 달의 투구', type: 'helmet', rarity: '에픽' },
  { name: '신왕의 면류관', type: 'helmet', rarity: '전설' },
  { name: '낡은 철 갑옷', type: 'armor', rarity: '일반' },
  { name: '기사단 정예 갑주', type: 'armor', rarity: '희귀' },
  { name: '피의 결의 갑옷', type: 'armor', rarity: '에픽' },
  { name: '태양의 심장 갑옷', type: 'armor', rarity: '전설' }
];

function LifeRPG() {
  const [equipped, setEquipped] = useState(equipmentSlots);

  const handleEquip = (item) => {
    setEquipped(prev => ({ ...prev, [item.type]: item }));
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Life RPG</h1>
      <div style={{ display: 'flex', gap: 20 }}>
        {Object.keys(equipped).map((slot) => (
          <div key={slot}>
            <h3>{slot}</h3>
            {equipped[slot] ? (
              <img
                src={`/images/${equipped[slot].name}.png`}
                alt={equipped[slot].name}
                width={64}
              />
            ) : (
              <p>장비 없음</p>
            )}
          </div>
        ))}
      </div>
      <h2>장비 목록</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
        {equipmentList.map((item) => (
          <div key={item.name} onClick={() => handleEquip(item)} style={{ cursor: 'pointer' }}>
            <img
              src={`/images/${item.name}.png`}
              alt={item.name}
              width={64}
              style={{ border: `2px solid ${rarityColors[item.rarity]}` }}
            />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LifeRPG;
