import React, { Component } from 'react';

export default class Leaderboard extends Component<any, any> {
  private calculateScore = () => {
    const { users } = this.props;
    const userSorted: any = [];
    Object.values(users).map((user: any) => {
      const userScore: number =
        Object.values(user.answers).length + user.questions.length;
      userSorted.push({
        id: user.id,
        score: userScore,
      });
      return userSorted;
    });
    userSorted.sort((a: any, b: any) => {
      return b.score - a.score;
    });
    return userSorted;
  };
  render() {
    const sortedUsers = this.calculateScore();
    return (
      <div>
        {sortedUsers.map((user: any) => {
          const userFromDB: any = Object.values(this.props.users).find(
            (uu: any) => uu.id === user.id
          );
          return (
            <div
              className="card p-3 mb-2 "
              style={{ width: '18rem', margin: 'auto', marginTop: '1rem' }}
              key={userFromDB.id}
            >
              <h5 className="card-title border-bottom">{userFromDB.name}</h5>
              <img
                src="https://www.gstatic.com/webp/gallery/1.jpg"
                className="card-img-top"
                alt="..."
              ></img>
              <div className="card-body">
                <div className="card-text">
                  <div>
                    Answered Questions{' '}
                    {Object.values(userFromDB.answers).length}
                  </div>
                  <br />
                  <div>Created Questions {userFromDB.questions.length}</div>
                  <br />
                  <div>Total Score {user.score}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
