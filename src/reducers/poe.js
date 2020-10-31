const initialState = {
  classIds: [
    { classId: 0, name: '貴族' },
    { classId: 1, name: '野蠻人' },
    { classId: 2, name: '遊俠' },
    { classId: 3, name: '女巫' },
    { classId: 4, name: '決鬥者' },
    { classId: 5, name: '聖堂武僧' },
    { classId: 6, name: '暗影刺客' },
  ],
  classes: [
    { class: 'Scion', name: '貴族' },
    { class: 'Ascendant', name: '昇華使徒' },

    { class: 'Marauder', name: '野蠻人' },
    { class: 'Juggernaut', name: '勇士' },
    { class: 'Berserker', name: '暴徒' },
    { class: 'Chieftain', name: '酋長' },

    { class: 'Ranger', name: '遊俠' },
    { class: 'Raider', name: '俠客' },
    { class: 'Deadeye', name: '銳眼' },
    { class: 'Pathfinder', name: '追獵者' },

    { class: 'Witch', name: '女巫' },
    { class: 'Occultist', name: '秘術家' },
    { class: 'Elementalist', name: '元素使' },
    { class: 'Necromancer', name: '死靈師' },

    { class: 'Duelist', name: '決鬥者' },
    { class: 'Slayer', name: '處刑者' },
    { class: 'Gladiator', name: '衛士' },
    { class: 'Champion', name: '冠軍' },

    { class: 'Templar', name: '聖堂武僧' },
    { class: 'Inquisitor', name: '判官' },
    { class: 'Hierophant', name: '聖宗' },
    { class: 'Guardian', name: '守護者' },

    { class: 'Shadow', name: '暗影刺客' },
    { class: 'Assassin', name: '刺客' },
    { class: 'Trickster', name: '詐欺師' },
    { class: 'Saboteur', name: '破壞者' },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
