
const IconoBoutique = ({ hovered }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="38"
            fill="#CECECE"
            viewBox="0 0 36 38"
        >
            <g fill={`${hovered ? '#fff' : '#CECECE'}`}>
                <g>
                    <path d="M23.276 28.103c-2.032.945-3.285.945-3.95.038-.36-.49-.323-.869.02-1.246.265.377.626 1.152.835 1.114a2.486 2.486 0 001.424-.888c1.937-2.568 3.988-3.21 6.989-1.813 1.576.737 2.83.567 4.064-.566a4.521 4.521 0 011.025-.662c.798-.358 1.766.038 2.051.813a1.45 1.45 0 01-.835 1.87c-.798.283-1.5-.095-1.843-.983-.056-.15-.094-.302-.151-.453-.817.397-1.615.793-2.393 1.171.285.51.588 1.095.892 1.68-.095.058-.209.114-.303.17-.133-.188-.285-.377-.4-.585-.55-1.02-1.367-1.737-2.468-2.077-1.235-.359-2.43-.189-3.343.755-.968 1.02-1.557 2.229-1.29 3.683.17.926.91 1.228 1.746 1.303.912.076 1.918-.453 2.09-1.152.056-.207-.229-.49-.286-.755-.057-.246-.133-.604 0-.756.133-.17.532-.283.722-.207.209.075.437.415.437.623-.076 1.7-1.33 2.795-3 2.7-1.653-.094-2.527-1.284-2.204-3.04.038-.189.095-.397.171-.737zm2.374-2.833c-2.355-.34-3.171 1.436-4.273 3.041 1.994-.34 2.716-2.285 4.273-3.04zm9.837.378c0-.132 0-.264.02-.396-.361-.246-.741-.7-1.102-.7-.304 0-.893.548-.855.813.038.378.494.906.836.963.323.038.721-.434 1.101-.68z"></path>
                    <path d="M25.48 32.089h-.21c-.835-.038-1.5-.36-1.936-.907-.475-.586-.627-1.417-.437-2.36.019-.133.057-.246.095-.398-1.9.813-3.153.756-3.837-.188-.398-.548-.38-1.02.02-1.492l.151-.19.133.19c.095.132.19.283.285.453.114.189.304.51.399.585.456-.094.988-.415 1.272-.793 2.051-2.72 4.197-3.267 7.217-1.87 1.52.718 2.678.548 3.855-.529.304-.264.665-.51 1.082-.698.437-.19.931-.208 1.387-.02.437.17.76.51.911.926.152.416.133.85-.038 1.247-.17.396-.493.698-.911.85-.893.32-1.71-.095-2.09-1.096-.037-.075-.056-.17-.075-.245l-2.013.982.892 1.662-.607.359-.095-.151c-.038-.057-.076-.114-.133-.17-.095-.133-.19-.265-.285-.416-.55-1.02-1.348-1.68-2.355-1.983-.873-.264-2.146-.34-3.152.699-1.064 1.114-1.482 2.266-1.235 3.513.133.698.627 1.076 1.576 1.152.836.075 1.748-.416 1.88-1.02.02-.057-.056-.189-.113-.283-.057-.114-.133-.246-.171-.378-.076-.34-.133-.699.038-.907.17-.226.664-.377.95-.264.284.113.569.529.55.812-.038.869-.38 1.624-.95 2.153-.531.529-1.253.775-2.05.775zm-1.938-4.326l-.095.378c-.019.114-.057.227-.075.321-.038.17-.076.302-.096.435-.151.85-.038 1.548.361 2.058.361.454.93.718 1.652.756.78.038 1.482-.19 1.976-.642.512-.454.797-1.115.835-1.89 0-.131-.17-.396-.304-.452-.114-.038-.436.037-.494.132-.037.056-.056.189.038.604.02.076.076.19.134.284.094.17.208.358.151.566-.17.774-1.253 1.398-2.279 1.303-1.12-.094-1.747-.566-1.918-1.454-.247-1.36.19-2.663 1.33-3.853.911-.944 2.127-1.228 3.532-.812 1.102.321 1.975 1.058 2.583 2.153.076.132.152.246.247.359l-.874-1.624L33 25.025l.076.208c.019.056.038.094.038.15.038.095.057.19.095.284.303.812.911 1.133 1.595.869.304-.114.55-.34.684-.661.019-.038.038-.076.038-.114-.095.057-.19.152-.304.227-.304.246-.608.491-.912.434-.437-.056-.93-.698-.987-1.133-.02-.189.114-.396.246-.529.21-.245.551-.472.798-.472.323 0 .608.246.893.472.095.076.19.17.285.227 0-.038-.02-.057-.038-.094a1.273 1.273 0 00-.703-.7 1.35 1.35 0 00-1.083 0c-.36.17-.702.379-.987.624-1.31 1.19-2.62 1.36-4.273.586-1.918-.888-3.437-.964-4.805-.133.532-.264 1.178-.396 1.975-.283l.608.095-.55.264c-.608.302-1.102.793-1.596 1.303-.74.756-1.481 1.53-2.716 1.738l-.436.075.247-.378c.133-.188.265-.396.398-.585.323-.51.665-1.02 1.064-1.435-.304.302-.608.66-.93 1.057-.362.472-.988.85-1.539.963-.266.057-.475-.302-.76-.774-.038-.056-.076-.132-.114-.189-.133.246-.075.491.152.812.59.831 1.805.794 3.723-.094l.36-.076zm1.5-2.341c-1.538.018-2.278 1.133-3.095 2.398-.038.057-.076.132-.133.189.855-.283 1.444-.888 2.051-1.511.361-.397.74-.774 1.178-1.076zm9.363-.68c-.19 0-.665.453-.665.604.038.302.418.755.665.793.152.02.418-.189.627-.359l.285-.226v-.208c-.095-.076-.171-.132-.266-.208-.228-.208-.475-.396-.646-.396z"></path>
                </g>
                <g>
                    <path d="M17.617 26.555c.437.717.38 1.208 0 1.68-.684.832-1.861.813-3.798-.075.057.529.133 1.058.133 1.568-.02 1.208-.74 2.002-1.956 2.172-1.348.189-2.62-.454-2.963-1.511-.114-.321-.266-.661-.266-.982 0-.265.114-.624.304-.756.152-.113.627-.057.722.095.133.188.19.698.057.812-.817.68-.19 1.114.266 1.492.702.585 1.842.604 2.582.132.78-.51.836-1.265.703-2.096-.285-1.795-1.462-3.173-2.943-3.438-1.653-.302-3.248.529-4.178 2.153-.114.208-.247.378-.38.567-.095-.057-.19-.095-.285-.151.285-.567.57-1.133.836-1.681-.741-.36-1.539-.756-2.355-1.171-.057.17-.114.378-.19.566-.342.813-1.083 1.152-1.842.85a1.436 1.436 0 01-.817-1.794c.228-.718 1.102-1.228 1.823-.944.513.207 1.007.529 1.443.887 1.159.983 2.317 1.115 3.76.492 1.045-.454 2.242-.624 3.4-.68 1.405-.076 2.564.547 3.304 1.813.247.396.494.85.855 1.114.304.245.798.378 1.177.34.171-.019.266-.585.4-.907.056-.132.094-.226.208-.547zm-1.994 1.756c-1.082-1.586-1.899-3.362-4.216-3.022 1.52.775 2.222 2.663 4.216 3.022zM3.678 25.667v-.453c-.361-.246-.74-.68-1.083-.661-.322.019-.911.566-.873.812.057.378.513.888.854.963.323.057.722-.434 1.102-.661z"></path>
                    <path d="M11.521 32.089c-1.253 0-2.355-.662-2.678-1.681-.019-.076-.057-.152-.076-.227-.095-.265-.19-.529-.19-.812 0-.302.114-.737.38-.926.171-.132.437-.094.551-.075.133.019.342.075.456.208.152.226.285.85.038 1.057-.228.19-.342.359-.323.491 0 .227.266.435.513.623l.095.076c.626.51 1.652.567 2.355.113.588-.377.778-.925.626-1.907-.266-1.7-1.386-3.022-2.791-3.268-1.577-.283-3.096.51-3.97 2.06-.075.15-.17.282-.265.415l-.114.17-.095.15-.608-.302.836-1.68-2.032-.983c-.038.114-.076.246-.133.378-.38.907-1.235 1.303-2.09.963a1.628 1.628 0 01-.93-2.02c.133-.416.475-.794.912-1.002.38-.188.797-.207 1.158-.075.494.189 1.007.51 1.5.925 1.102.926 2.165 1.077 3.552.473.93-.397 2.05-.624 3.456-.7 1.5-.075 2.697.586 3.494 1.908l.02.038c.227.378.455.774.778 1.02.266.189.684.321 1.007.302.056-.075.113-.302.17-.434a8.25 8.25 0 01.114-.359l.076-.227c.02-.075.057-.17.095-.283l.133-.378.21.34c.455.737.455 1.322-.02 1.889-.703.869-1.861.907-3.722.113 0 .057.019.114.019.17.038.36.095.718.076 1.096-.02 1.284-.798 2.172-2.108 2.342-.152.019-.323.019-.475.019zM9.3 28.746c-.057 0-.114 0-.133.018-.133.095-.228.378-.228.605 0 .226.095.453.171.699.038.075.057.17.076.245.323.963 1.5 1.568 2.754 1.379 1.12-.151 1.766-.888 1.785-1.983 0-.34-.038-.68-.076-1.039l-.057-.51-.038-.321.304.132c1.861.85 2.963.888 3.59.132.284-.34.341-.66.19-1.076-.02.038-.02.075-.039.113-.038.095-.076.208-.114.321-.114.378-.209.68-.456.699-.436.038-.968-.094-1.31-.378-.38-.283-.646-.736-.873-1.133l-.02-.038c-.702-1.19-1.804-1.794-3.133-1.718-1.348.075-2.45.283-3.323.68-1.539.66-2.754.51-3.95-.53-.456-.377-.931-.68-1.387-.85-.266-.094-.57-.075-.873.057a1.282 1.282 0 00-.703.775 1.28 1.28 0 00.703 1.567c.645.265 1.291-.037 1.576-.736-.095.056-.19.151-.285.226-.304.246-.608.492-.912.435-.417-.076-.95-.661-1.006-1.114-.019-.133.038-.303.19-.473.209-.264.589-.528.873-.547.323-.02.608.226.893.453.114.094.209.17.323.245l.095.057v.378c0-.019.019-.038.019-.038l.057-.17.076-.208 2.715 1.341-.721 1.436c.038-.057.076-.133.114-.19.968-1.699 2.64-2.549 4.368-2.247 1.557.284 2.81 1.719 3.095 3.589.114.755.133 1.68-.797 2.266-.836.53-2.07.472-2.811-.15l-.095-.076c-.304-.246-.646-.53-.646-.926 0-.264.152-.529.475-.793.038-.057 0-.416-.095-.548a.961.961 0 00-.36-.056zM2.614 24.74c-.246.02-.702.454-.721.605.038.302.437.736.702.793.133.019.38-.189.59-.359l.284-.226v-.246c-.095-.056-.17-.132-.266-.208-.19-.17-.418-.359-.589-.359zm13.408 3.835l-.437-.076c-1.234-.227-1.994-1.001-2.735-1.756-.493-.51-.95-.983-1.557-1.285l-.531-.264.588-.076c2.165-.302 3.115 1.134 4.026 2.531.133.189.247.378.38.567l.266.359zm-4.026-3.136c.418.302.778.68 1.14 1.04.607.641 1.196 1.246 2.05 1.529l-.114-.17c-.816-1.265-1.557-2.38-3.076-2.399z"></path>
                </g>
                <g>
                    <path d="M19.174 31.446c1.729 1.53 1.406-.359-.493.7-.152.075-.437 5.722-.57 5.627-1.861-1.19-2.146-4.684-.437-6.346.228.284.456.548.74.87.248-.284.513-.567.76-.85zm-1.557.812c-1.082 1.757-.722 3.91.817 5.081 1.538-1.247 1.88-3.4.76-5.118-.494.85-1.045.755-1.577.037z"></path>
                    <path d="M18.092 38l-.095-.057c-.874-.566-1.481-1.68-1.633-2.984-.152-1.435.285-2.814 1.158-3.664l.152-.15.722.868.76-.831.132.132c.152.132.285.246.38.321.38-.019.646.095.76.246.076.113.076.245-.02.34-.151.132-.436.075-.835-.19-.076.02-.17.039-.247.058l.02.037c1.177 1.794.835 4.042-.798 5.364l-.114.094-.076-.056c-.057.378-.095.397-.171.434l-.095.038zm-.437-6.29c-.703.775-1.025 1.965-.893 3.212.114 1.076.57 2.002 1.235 2.55 0-.076.019-.152.019-.246-1.386-1.285-1.633-3.343-.57-5.062l.152-.245.171.226c.171.227.399.472.646.491v-.056l-.02.018-.74-.887zm.76 5.365c1.33-1.134 1.614-2.966.76-4.514-.134.17-.285.302-.437.377-.057.548-.114 1.341-.171 2.021a62.37 62.37 0 01-.152 2.116zm-.779-4.477c-.76 1.417-.589 3.041.418 4.156.057-.53.095-1.21.152-1.814.076-.887.114-1.492.152-1.907-.228-.038-.475-.19-.722-.435zm1.197-.32c0 .037-.02.075-.02.132.058-.057.096-.133.152-.19-.038.02-.095.038-.133.057z"></path>
                </g>
                <g>
                    <path d="M19.915 30.389c.475.302 1.026.547 1.444.944.55.529.987 1.133 1.899.907.17-.038.55.245.588.434.057.189-.133.529-.323.68-.588.472-1.405.264-1.975-.434-.588-.737-1.158-1.493-1.747-2.248a1.46 1.46 0 00.114-.283z"></path>
                    <path d="M22.82 33.77c-.493 0-1.006-.265-1.405-.756-.417-.529-.835-1.058-1.234-1.568-.17-.226-.342-.453-.532-.68l-.057-.075.21-.586.208.133c.152.094.304.188.456.264.36.208.721.416 1.006.699l.21.208c.455.453.816.812 1.519.642.284-.076.76.302.835.566.076.303-.17.7-.38.87a1.353 1.353 0 01-.835.282zm-2.696-3.041c.133.17.247.34.38.49.399.51.816 1.058 1.215 1.568.513.623 1.197.794 1.71.397.151-.113.265-.397.246-.472-.019-.114-.285-.303-.38-.303-.892.227-1.386-.264-1.86-.755l-.21-.208c-.265-.245-.588-.434-.93-.642-.057-.019-.114-.056-.171-.075z"></path>
                </g>
                <g>
                    <path d="M17.161 30.578c-.646.812-1.196 1.53-1.747 2.247-.608.774-1.291 1.001-1.956.567-.21-.133-.399-.491-.38-.737 0-.151.437-.472.608-.415.95.245 1.386-.397 1.899-.945.418-.472.873-.906 1.576-.718z"></path>
                    <path d="M14.123 33.788c-.266 0-.532-.075-.779-.245-.266-.19-.494-.586-.475-.907 0-.17.171-.32.304-.415.095-.076.342-.227.55-.17.741.189 1.102-.227 1.54-.718.056-.057.113-.113.17-.189.36-.396.912-.982 1.766-.755l.285.075-.779 1.001c-.398.51-.76.982-1.139 1.454-.456.567-.95.87-1.443.87zm-.874-1.114c0 .17.152.453.304.548.703.472 1.31-.038 1.71-.53.36-.471.74-.944 1.139-1.453l.398-.53c-.417.02-.74.303-1.101.68a1.223 1.223 0 00-.152.17c-.456.51-.969 1.077-1.918.832-.076.019-.323.189-.38.283z"></path>
                </g>
                <g>
                    <path d="M12.414 14.26c-.095.302-.152.623-.285.906-.969 1.964-3.609 3.173-5.698 2.493-.607-.208-1.158-.718-1.652-1.17-.285-.265-.38-.738-.646-1.02-.36-.378-.816-.662-1.234-1.002-.209.397-.437.812-.684 1.266-.474-.227-.341-.7-.152-1.152.418-.983 1.33-1.077 3.343-.378 0-.661-.095-1.322.019-1.945.323-1.644 2.184-2.23 3.456-1.134.057.038.095.095.133.133 1.443 1.378 2.545 1.718 3.665 1.114 1.178-.623 2.127-2.72 1.9-4.174-.134-.831-.627-1.322-1.444-1.398-.778-.075-1.443.227-1.766.982-.095.208.095.53.133.794.038.302.095.623.019.906-.02.095-.589.208-.627.132a2.124 2.124 0 01-.285-.887c0-.303.114-.605.19-.907.266-.944 1.197-1.549 2.26-1.51 1.045.037 1.785.66 1.918 1.718.076.585.02 1.19.02 1.85 1.082-.415 2.221-1.02 3.152.17.246.322.17.907.246 1.36-.113.038-.246.076-.36.114a1.308 1.308 0 01-.095-.246c-.133-.377-.285-.755-.418-1.133-.399.265-.912.434-1.159.793-1.955 2.909-3.247 3.268-6.665 1.681.057.246.152.435.114.605-.057.245-.152.547-.342.698-.133.095-.55.02-.646-.113-.133-.189-.19-.547-.095-.755.4-.963.228-1.473-.721-1.851-.893-.359-1.861.075-2.146.963-.437 1.398.493 3.758 1.766 4.495 1.177.68 2.678.264 3.646-1.058.323-.434.57-.944.836-1.416.114.019.209.057.304.075zm-8.319.094c.836 1.322 1.235 3.154 3.685 2.927-1.615-.774-2.051-2.53-3.685-2.927zm8.793-1.435c1.69.358 2.507-.945 3.362-2.91a1.693 1.693 0 01-.171-.188c-1.064 1.02-2.127 2.04-3.19 3.098z"></path>
                    <path d="M7.647 18.037c-.437 0-.874-.057-1.292-.19-.607-.188-1.139-.679-1.614-1.113l-.114-.095a1.943 1.943 0 01-.38-.585c-.075-.17-.17-.34-.284-.454-.247-.245-.532-.453-.836-.68-.076-.056-.133-.094-.209-.15l-.665 1.227-.17-.075c-.703-.34-.361-1.115-.247-1.398.512-1.19 1.69-1.114 3.323-.567 0-.113-.019-.226-.019-.34-.019-.453-.038-.925.038-1.378.17-.813.703-1.455 1.462-1.72.779-.264 1.653-.094 2.317.473l.114.113.038.038c1.386 1.322 2.412 1.643 3.437 1.077 1.102-.586 2.014-2.607 1.805-3.985-.114-.737-.551-1.171-1.273-1.228-.76-.076-1.31.245-1.576.869-.038.075.019.226.057.359.038.113.076.226.076.34 0 .056.019.094.019.15.038.284.076.567 0 .832-.02.056-.057.207-.57.283-.17.019-.323.019-.399-.094a2.185 2.185 0 01-.303-.983c0-.283.075-.547.151-.812.02-.056.038-.113.057-.17.285-1.02 1.292-1.7 2.45-1.643 1.178.038 1.956.756 2.108 1.889.057.415.038.83.02 1.265v.34c.018 0 .018 0 .037-.019 1.007-.396 2.146-.85 3.077.34.209.265.228.642.247 1.02 0 .151.018.302.038.435l.018.15-.683.227-.095-.245c-.02-.057-.057-.114-.076-.19-.095-.282-.209-.547-.304-.83l-.038-.095c-.076.038-.133.076-.209.114-.285.15-.55.302-.683.49-1.918 2.928-3.305 3.363-6.514 1.946.019.114.038.208.019.302-.057.265-.171.624-.4.813-.132.094-.36.094-.474.056-.114-.019-.342-.075-.437-.227-.17-.264-.228-.68-.114-.944.19-.453.228-.774.133-1.02-.095-.226-.342-.415-.76-.585-.398-.151-.816-.151-1.177.019-.342.17-.607.453-.721.83-.418 1.323.474 3.59 1.67 4.27 1.102.622 2.508.207 3.4-1.002.209-.302.399-.623.57-.944.076-.151.17-.302.247-.454l.076-.132.607.208-.057.17c-.037.094-.056.189-.075.283a3.038 3.038 0 01-.228.661c-.798 1.662-2.754 2.758-4.615 2.758zm-4.824-3.853l.171.132c.133.095.247.189.38.283.304.227.608.454.873.718.152.151.247.359.342.548.095.189.171.359.304.472l.114.094c.456.416.95.87 1.481 1.04 1.975.641 4.54-.473 5.47-2.4.076-.17.133-.358.19-.547-.038.057-.057.113-.095.17-.19.34-.361.68-.608.982-1.007 1.379-2.62 1.85-3.893 1.114-1.348-.755-2.317-3.23-1.842-4.702.152-.473.475-.85.911-1.058a1.837 1.837 0 011.482-.02c.512.209.835.473.968.794.133.34.095.756-.133 1.303-.057.152-.019.435.076.586.057.056.304.094.38.056.095-.075.19-.264.247-.585.019-.057-.02-.17-.057-.283a4.942 4.942 0 01-.057-.246l-.076-.377.342.17c2.108 1.02 3.361 1.265 4.5.547-.417.189-.892.246-1.443.132l-.341-.075 3.304-3.21c-.133.056-.285.112-.437.17-.095.037-.19.075-.304.112l-.266.095v-.283c0-.208 0-.416.02-.624a8.513 8.513 0 00-.02-1.208c-.133-.945-.76-1.53-1.747-1.568-.968-.038-1.823.529-2.07 1.379l-.057.17c-.076.245-.133.472-.133.68 0 .226.076.49.21.717a.899.899 0 00.322-.075c.038-.19 0-.416-.019-.624 0-.056-.019-.113-.019-.15-.019-.076-.038-.17-.076-.284-.057-.208-.133-.415-.038-.623.323-.793 1.045-1.19 1.956-1.096.893.076 1.463.642 1.614 1.55.228 1.529-.76 3.7-1.994 4.362-1.215.642-2.373.302-3.893-1.133l-.038-.038-.095-.095c-.57-.49-1.291-.642-1.956-.415-.626.227-1.063.737-1.196 1.435-.076.416-.057.831-.038 1.285.019.207.019.415.019.623v.264l-.247-.094c-2.165-.756-2.773-.472-3.096.283-.19.454-.19.661-.094.793l.702-1.246zm10.464-1.398c1.177.076 1.861-.83 2.659-2.587l-2.659 2.587zm2.906-3.116l.265.283-.056.114c-.266.623-.551 1.208-.874 1.7.209-.265.437-.586.665-.926.19-.283.512-.453.816-.623.133-.076.266-.151.38-.227l.209-.132.19.529c.095.283.209.547.304.83.019.02.019.057.038.076l.038-.019c-.02-.113-.02-.207-.02-.32-.018-.303-.018-.624-.17-.794-.513-.661-1.12-.68-1.785-.491zM7.38 17.49c-1.804 0-2.45-1.21-3.02-2.286a6.8 6.8 0 00-.417-.737l-.247-.396.456.113c.93.227 1.5.888 2.05 1.51.475.53.95 1.077 1.653 1.417l.626.302-.683.057c-.133 0-.285.02-.418.02zm-2.849-2.796c.057.113.114.208.171.302.532 1.02 1.045 1.964 2.412 2.078-.475-.34-.836-.756-1.196-1.171-.418-.454-.836-.926-1.387-1.21z"></path>
                </g>
                <g>
                    <path d="M24.89 14.07c.21.378.342.662.494.945.665 1.17 1.557 2.002 3 1.926 1.368-.075 2.07-1.02 2.47-2.153.246-.717.38-1.53.36-2.285 0-.812-.57-1.322-1.405-1.398-.855-.075-1.463.34-1.804 1.096-.076.17.076.415.114.642.038.321.114.661.076.982 0 .076-.57.208-.627.132-.171-.245-.228-.566-.323-.869a.59.59 0 01.019-.226c-1.026.245-2.013.566-3.02.66-1.329.133-2.373-.471-3.038-1.661-.228-.416-.437-.85-.76-1.19-.228-.246-.626-.321-.93-.491-.133.283-.285.566-.399.85-.057.132-.038.283-.076.566-.665-.49-.532-1.038-.228-1.435.95-1.284 2.108-.68 3.21-.227 0-.642-.057-1.246.019-1.813.132-1.038.816-1.68 1.785-1.775 1.12-.095 2.05.453 2.392 1.454.114.36.266.718.266 1.077 0 .264-.151.566-.341.774-.076.076-.513 0-.57-.094-.114-.246-.21-.605-.095-.85.36-.831.247-1.303-.513-1.719-.817-.434-1.842-.189-2.26.548-.873 1.51.551 4.703 2.28 5.043 1.082.226 1.993-.17 2.734-.945 1.006-1.058 1.823-1.303 2.83-.85.873.378 1.253 1.19 1.177 2.55-.02.283-.038.548-.057.907 1.101-.473 2.222-1.04 3.152.075.285.321.21.944.304 1.417-.114.018-.228.037-.342.075-.057-.094-.114-.189-.152-.283a23.02 23.02 0 01-.38-1.039c-.36.208-.778.34-1.063.623-.285.284-.437.68-.645 1.04-.912 1.51-2.184 1.982-4.16 1.567-1.88-.397-3.513-1.851-3.684-3.268-.019-.075.076-.15.19-.377zm8.28.114c-1.823.585-2.279 2.323-3.608 3.04 2.184.246 2.583-1.548 3.608-3.04zM21.035 9.82c-.095.095-.19.17-.285.264.893 1.228 1.254 3.06 3.514 2.89l-3.229-3.154z"></path>
                    <path d="M29.657 18.056c-.399 0-.835-.057-1.31-.151-1.975-.416-3.646-1.927-3.836-3.419-.02-.113.038-.189.114-.302.038-.057.076-.113.113-.189l.171-.302.171.32c.076.133.133.246.19.36.114.208.21.396.304.585.74 1.322 1.633 1.889 2.83 1.832 1.101-.056 1.842-.717 2.298-2.04.246-.68.36-1.454.36-2.228 0-.68-.474-1.133-1.234-1.209-.74-.075-1.291.264-1.614.982-.02.038.019.17.057.265.019.094.057.17.076.264 0 .057.019.132.038.189.038.283.095.566.057.85-.02.15-.171.208-.4.264-.398.095-.512.02-.569-.056-.152-.246-.228-.51-.304-.794l-.038-.132v-.038c-.228.057-.474.114-.683.17-.684.19-1.406.36-2.108.435-1.406.132-2.507-.472-3.229-1.757l-.114-.226c-.17-.321-.36-.661-.607-.926-.133-.132-.342-.227-.551-.302-.057-.019-.095-.038-.152-.057-.02.02-.02.057-.038.076-.095.189-.19.396-.285.604a.736.736 0 00-.038.246c0 .075-.019.15-.019.264l-.038.321-.266-.189c-.626-.472-.721-1.095-.266-1.7.95-1.284 2.127-.83 3.172-.396v-.302a9.037 9.037 0 01.019-1.247c.133-1.114.873-1.832 1.956-1.926 1.215-.113 2.222.51 2.583 1.586l.038.133c.114.32.228.66.228 1.02 0 .415-.285.793-.38.906-.02.038-.114.132-.437.094-.171-.018-.38-.075-.456-.226-.057-.151-.266-.642-.095-1.001.323-.756.228-1.133-.437-1.473-.74-.378-1.633-.17-1.994.472-.38.642-.303 1.756.19 2.814.475 1.058 1.235 1.794 1.956 1.945.969.19 1.804-.094 2.564-.887 1.064-1.115 1.956-1.38 3.058-.888.968.415 1.367 1.284 1.29 2.738-.018.19-.018.378-.037.586v.019c1.007-.435 2.146-.869 3.096.245.227.265.265.661.284 1.04.02.17.02.32.057.452l.038.19-.664.131-.076-.113c-.02-.019-.038-.056-.057-.075-.038-.076-.095-.152-.114-.227-.095-.246-.19-.51-.285-.755l-.038-.095c-.057.019-.095.057-.152.076-.247.132-.494.245-.665.415-.17.17-.304.397-.417.642a3.057 3.057 0 01-.19.34c-.798 1.171-1.767 1.757-3.115 1.757zm-4.767-3.589c.19 1.303 1.767 2.663 3.533 3.041 1.918.416 3.095-.038 3.969-1.473.057-.114.114-.208.17-.321.134-.265.285-.53.494-.756.228-.207.494-.359.76-.49.114-.057.228-.114.323-.17l.19-.114.19.491c.095.245.19.51.285.755.019.038.038.095.075.133h.038c-.019-.114-.019-.208-.038-.321-.018-.322-.056-.662-.208-.832-.342-.396-.703-.547-1.083-.566l-.285.415c-.209.322-.398.643-.588.964-.703 1.227-1.368 2.38-3.21 2.172l-.608-.076.532-.283c.55-.284.93-.756 1.349-1.266.588-.717 1.196-1.435 2.297-1.794l.38-.113c-.474.019-.987.226-1.557.472l-.475.208.038-.642c.02-.208.02-.397.038-.586.076-1.284-.247-2.02-1.063-2.38-.95-.415-1.671-.207-2.621.813-.836.887-1.823 1.227-2.906 1-.835-.17-1.69-1-2.221-2.153-.551-1.19-.608-2.398-.171-3.173.474-.812 1.595-1.095 2.506-.623.836.435 1.007 1.02.608 1.946-.057.132-.019.396.095.66.057.038.209.057.285.057.17-.208.266-.453.266-.623 0-.283-.114-.604-.21-.888l-.037-.132c-.304-.906-1.14-1.416-2.184-1.322-.912.076-1.5.661-1.614 1.605-.057.378-.038.775-.02 1.19 0 .19.02.397.02.605v.283l-.456-.189c-.171-.075-.323-.132-.494-.208l3.38 3.324-.417.038c-1.88.132-2.545-1.057-3.134-2.096a9.627 9.627 0 00-.532-.87l-.095-.131.418-.378c-.702-.208-1.348-.189-1.918.585-.247.34-.266.643-.076.926.02-.076.02-.151.057-.227l.285-.623c.038-.075.076-.17.114-.245l.076-.17.171.075c.095.038.19.076.285.132.247.095.513.208.703.397.284.302.474.66.664 1l.114.228c.627 1.152 1.633 1.7 2.868 1.567.683-.056 1.348-.245 2.05-.434.305-.076.627-.17.95-.246l.247-.056-.038.302c0 .019-.019.094-.019.132l.038.132c.057.208.114.434.209.604.076 0 .228-.037.323-.075 0-.208-.02-.434-.057-.661-.02-.057-.02-.132-.038-.189 0-.057-.038-.132-.057-.208-.057-.17-.114-.358-.038-.528.38-.87 1.082-1.304 1.994-1.21.968.095 1.576.7 1.576 1.587 0 .812-.114 1.624-.38 2.361-.512 1.454-1.405 2.229-2.64 2.285-1.329.076-2.373-.585-3.17-2.02a8.803 8.803 0 01-.324-.605c.038.019.038 0 .02-.019zm7.806.132c-.684.36-1.14.907-1.577 1.455-.303.359-.607.717-.968 1.02 1.177-.076 1.671-.945 2.26-2.002.095-.17.19-.321.285-.473zm-11.699-4.476a8 8 0 01.456.756c.532.944 1.045 1.85 2.336 1.926l-2.773-2.72-.019.038z"></path>
                </g>
                <g>
                    <path d="M18.529.227c2.165 1.416 2.583 4.684.74 6.553-.246-.32-.493-.623-.76-.963-.246.34-.474.623-.683.907-1.67-1.058-1.766-5.119.703-6.497zm-.038.585c-1.538 1.303-1.88 3.438-.76 5.1.513-.813 1.083-.775 1.577.037 1.101-1.813.721-3.947-.817-5.137z"></path>
                    <path d="M19.25 7.045l-.74-.945-.646.85-.152-.075c-.816-.51-1.33-1.757-1.291-3.135.038-1.625.797-3.003 1.994-3.683L18.529 0l.095.057c1.101.717 1.823 1.926 1.956 3.286.152 1.34-.285 2.625-1.196 3.532l-.134.17zm-.74-1.53l.76.963c.721-.812 1.063-1.926.93-3.078-.133-1.228-.74-2.286-1.69-2.947-1.026.624-1.671 1.851-1.71 3.305-.037 1.171.343 2.21.97 2.701l.702-.944c-.228.019-.456.283-.589.51l-.152.245-.152-.245c-1.158-1.738-.816-3.985.798-5.345l.114-.113.114.094c1.633 1.247 1.994 3.513.854 5.402l-.17.264-.171-.264c-.114-.246-.342-.53-.608-.548zm0-.378c.285 0 .55.151.778.453.836-1.624.532-3.437-.797-4.532-1.291 1.19-1.595 3.022-.76 4.514.247-.284.513-.435.779-.435z"></path>
                </g>
                <g>
                    <path d="M19.839 7.63c.665-.869 1.253-1.624 1.842-2.38.513-.66 1.177-.83 1.918-.434.19.113.437.51.36.642-.113.227-.512.53-.664.472-.873-.283-1.272.321-1.728.831-.456.491-.93.964-1.728.87z"></path>
                    <path d="M20.048 7.838c-.076 0-.152 0-.228-.019l-.323-.038.798-1.038c.436-.567.835-1.077 1.234-1.606.589-.755 1.348-.925 2.165-.49.247.131.57.641.456.887-.133.264-.589.68-.893.566-.664-.207-.987.151-1.386.605-.057.056-.095.113-.152.17-.418.434-.893.963-1.671.963zm2.773-3.04c-.38 0-.703.188-1.007.566-.399.51-.817 1.039-1.235 1.605l-.36.472c.474-.056.816-.377 1.196-.812.057-.056.095-.113.152-.17.418-.472.874-1 1.785-.717.076 0 .342-.19.437-.36-.019-.094-.152-.34-.285-.415a1.586 1.586 0 00-.684-.17z"></path>
                </g>
                <g>
                    <path d="M17.085 7.762c-.436-.245-.93-.434-1.31-.774-.607-.548-1.025-1.398-2.108-1.058-.133.038-.494-.245-.513-.415-.018-.227.133-.548.304-.68.627-.453 1.463-.227 2.051.529.551.718 1.102 1.416 1.633 2.134-.018.094-.037.17-.056.264z"></path>
                    <path d="M17.2 8.046l-.21-.114c-.133-.075-.265-.15-.417-.207-.323-.17-.646-.34-.931-.586a7.368 7.368 0 01-.38-.396c-.437-.473-.797-.87-1.538-.624-.114.038-.228 0-.38-.094-.038-.019-.36-.246-.38-.491-.038-.284.152-.68.38-.85.684-.51 1.652-.283 2.317.566.38.492.76.983 1.14 1.493l.55.717-.152.586zm-3.058-2.38c.646 0 1.025.434 1.386.812a3.4 3.4 0 00.36.378c.229.208.533.359.836.529a.931.931 0 00.133.056l-.36-.472c-.38-.49-.76-.982-1.14-1.492-.532-.68-1.253-.888-1.785-.49-.133.094-.247.358-.228.509.02.057.21.227.304.246.17-.038.342-.076.494-.076z"></path>
                </g>
                <path d="M13.382 17.848a.859.859 0 01-.341-.283.552.552 0 01-.114-.322c0-.037.019-.056.038-.056.037.189.095.321.17.396.076.095.171.152.304.227.171.076.342.095.475.057.152-.038.285-.151.418-.302a1.01 1.01 0 00.209-.51 3.176 3.176 0 00-1.386-.321 2.8 2.8 0 00-1.064.188c.114.095.209.19.285.303a.546.546 0 01.114.302c0 .056-.02.094-.076.094-.247 0-.38-.207-.437-.642-.36.17-.627.397-.798.718a2.544 2.544 0 00-.152.396c-.037.095-.037.227-.037.36 0 .585.227 1.038.664 1.378l.057.038c0 .019-.019.019-.038.019s-.114-.057-.228-.17c-.133-.114-.247-.284-.36-.51-.115-.227-.153-.491-.153-.793 0-.133.02-.246.038-.34.038-.151.095-.284.152-.397.171-.321.437-.586.798-.793-.266-.151-.665-.227-1.158-.227-.722 0-1.33.189-1.804.585-.475.397-.722.888-.722 1.493 0 .66.285 1.152.854 1.51.038-.264.114-.51.266-.68-.209-.17-.304-.396-.304-.68 0-.018.02-.037.076-.037.057 0 .076.038.076.113 0 .227.057.416.19.567.114-.17.266-.284.437-.378a.97.97 0 01.494-.132c.36 0 .55.132.55.397 0 .132-.056.226-.19.302a.907.907 0 01-.455.113c-.342 0-.627-.075-.817-.208a1.225 1.225 0 00-.228.7c.228.112.475.188.741.226.076.019.133.019.133.038l-.095.018c-.209 0-.475-.075-.779-.207 0 .283.095.51.285.68a.94.94 0 00.646.264c.038 0 .114-.019.209-.038l.038.02c0 .018-.038.037-.095.037s-.133.019-.19.019c-.285 0-.532-.095-.703-.284-.19-.188-.266-.434-.266-.736v-.038a2.033 2.033 0 01-.76-.68 1.813 1.813 0 01-.284-1c0-.567.266-1.058.817-1.436a3 3 0 011.823-.586c.55 0 .968.076 1.272.246v-.095c0-.245.057-.472.19-.66a1.11 1.11 0 01.532-.435c.019-.057.057-.076.095-.076.019 0 .038 0 .057.02l.038-.02c.019-.056.038-.075.095-.075l.056.038.039-.02c.018-.075.056-.113.114-.113.056 0 .094.038.113.114h.038c.02-.038.038-.038.076-.038s.076.019.095.057l.038.018.038-.018c.02 0 .057.018.095.075.285.095.513.265.684.491.19.246.285.51.285.85.399.208.683.472.892.793.21.321.323.661.323 1.02 0 .53-.209.963-.608 1.322.266.17.494.397.646.7.171.301.247.585.247.906 0 .472-.19.869-.55 1.19-.362.32-.798.49-1.292.49-.209 0-.437-.037-.684-.113.038.114.057.246.057.397 0 .359-.152.68-.475.925-.303.265-.664.378-1.063.378-.304 0-.589-.057-.874-.189-.284-.132-.512-.283-.664-.49-.152-.19-.228-.322-.228-.398l.019-.037.038.037c.057.152.17.303.342.473.17.17.38.302.645.396.266.095.513.151.76.151.36 0 .684-.132.95-.377.284-.265.417-.548.417-.907 0-.151-.019-.283-.076-.415a1.575 1.575 0 01-.475-.303c-.113-.113-.17-.226-.17-.32 0-.057.038-.076.095-.076.075 0 .19.056.341.189.133.113.247.283.342.472.247.075.513.113.779.113.399 0 .76-.15 1.101-.453.342-.302.494-.718.494-1.247 0-.264-.076-.529-.209-.793a1.723 1.723 0 00-.57-.642c-.114.076-.227.151-.341.189-.133.056-.304.094-.551.15-.038 0-.095.02-.19.02-.17 0-.36-.038-.532-.095a1.972 1.972 0 01-.398-.188v.094c.075.019.132.057.132.113 0 .038-.019.057-.038.076a.144.144 0 01-.076.038v.32c0 .057-.018.076-.037.076-.02 0-.02-.019-.02-.075v-.34c-.037 0-.056-.02-.075-.038a.142.142 0 01-.039-.076c0-.056.039-.094.134-.113v-.869c0-.056 0-.094-.02-.132-.018-.038-.018-.057-.018-.094 0-.038.019-.076.038-.095v-.056c-.076-.02-.114-.076-.114-.133 0-.037.018-.056.037-.094.02-.038.058-.038.077-.038v-.056a.144.144 0 01-.038-.095c0-.038 0-.057.019-.094.019-.038.019-.076.019-.114v-.208c0-.056.019-.075.037-.075.02 0 .02.019.02.075v.208c0 .057 0 .095.018.114a.17.17 0 01.02.094.144.144 0 01-.039.095v.056c.038 0 .057.019.076.038.02.038.038.057.038.094 0 .076-.038.114-.114.133v.056a.144.144 0 01.038.095c0 .018 0 .056-.019.094s-.019.076-.019.132v.718l.038.019c.247.151.532.245.855.245.114 0 .19 0 .228-.018.133-.02.304-.057.532-.133a1.8 1.8 0 00.323-.17 1.08 1.08 0 00-.532-.15c-.228 0-.38.018-.475.037-.095.019-.152.038-.171.038-.038 0-.038-.02-.038-.038l.171-.038c.17-.038.323-.038.456-.038h.038c.209 0 .418.057.607.17.4-.32.59-.755.59-1.284 0-.34-.096-.66-.305-.963-.19-.302-.475-.529-.854-.718a1.01 1.01 0 01-.21.51.826.826 0 01-.417.302c-.285.038-.475.02-.684-.094zm-.987.83c.114.246.152.492.152.775 0 .53-.171.945-.494 1.285-.323.34-.684.49-1.064.49-.265 0-.455-.056-.626-.17a.522.522 0 01-.228-.415c0-.113.038-.227.114-.302a.345.345 0 01.266-.113c.266 0 .417.113.417.34 0 .094-.037.17-.094.226a.306.306 0 01-.21.095.468.468 0 01-.303-.114c0 .133.057.227.19.303.133.075.304.113.531.113.228 0 .456-.132.684-.378.228-.245.342-.604.342-1.057 0-.378-.095-.718-.285-1.02a1.466 1.466 0 00-.779-.605l-.056-.019c-.133-.056-.323-.075-.532-.075-.38 0-.684.094-.893.302-.228.189-.342.416-.342.661 0 .038-.019.038-.076.038-.057 0-.076-.038-.076-.114 0-.358.152-.66.475-.887.304-.246.703-.36 1.197-.36.133 0 .265.02.418.058l.056.018c.551.152.95.454 1.197.926.228-.264.57-.529 1.025-.774.02-.02.038-.02.057-.038.266-.17.456-.34.57-.51l.038-.057.038.02c0 .037-.057.112-.152.226-.095.113-.152.17-.152.189 0 .056.038.113.114.189l.057.037c.342.208.513.454.513.718 0 .321-.171.642-.513.944.19.076.36.19.513.34a.261.261 0 01.057.076c.095.094.17.207.209.32l.038.057c.057.133.076.265.076.416 0 .378-.133.68-.4.944-.265.265-.588.378-.968.378a.972.972 0 01-.588-.208c-.171-.132-.266-.302-.266-.49 0-.114.038-.227.095-.322a.584.584 0 01.284-.189l.057-.019.077-.018c.113 0 .227.037.303.113.076.075.114.17.114.283a.325.325 0 01-.342.34c-.209 0-.303-.094-.303-.302 0-.132.095-.227.284-.246 0-.056-.056-.075-.19-.075a.277.277 0 00-.246.132.634.634 0 00-.095.321c0 .151.076.284.228.416a.693.693 0 00.474.188.695.695 0 00.627-.358c.133-.246.209-.567.209-.963 0-.076 0-.152-.019-.19l-.019-.075a1.012 1.012 0 00-.152-.416l-.038-.056a.77.77 0 00-.228-.264c-.228.15-.418.226-.57.226-.037 0-.075 0-.133-.019l-.056-.038a.144.144 0 01-.038-.094c0-.057.019-.094.037-.113l.057-.057a.882.882 0 01.437-.094c.076 0 .171.018.304.037a.676.676 0 00.19-.453.493.493 0 00-.095-.321c-.057-.113-.152-.208-.304-.321-.152-.095-.247-.17-.285-.227a.674.674 0 01-.113-.207c-.038 0-.133.056-.304.17-.114.056-.304.226-.494.434zm-2.963.889c.19.15.418.226.722.226.19 0 .323-.037.437-.113a.366.366 0 00.152-.302c0-.19-.152-.302-.437-.302-.342.018-.627.17-.874.49zm.304 2.663c0-.246.152-.454.456-.661.304-.208.665-.303 1.063-.303.418 0 .76.133 1.045.378l.057.038c.038 0 .114-.076.247-.246.019 0 .038.02.038.038 0 .038-.057.095-.152.208a1.33 1.33 0 01-.361.283c-.304.17-.513.34-.608.51l-.019.019-.038-.019c0-.056.133-.189.4-.434 0-.057-.096-.132-.267-.227-.19-.113-.437-.17-.76-.17-.284 0-.531.057-.721.17-.19.113-.285.264-.285.453 0 .057-.019.076-.038.076-.038-.019-.057-.057-.057-.113zm.076.018c0 .19.095.36.266.492.17.132.418.207.74.207h.114a.462.462 0 01.171-.207c.076-.057.133-.076.19-.076.095 0 .133.038.133.095 0 .113-.133.207-.38.245a.675.675 0 00-.037.208c0 .189.095.378.303.51.21.15.418.226.665.226.209 0 .418-.056.608-.189l.057-.037.019.019c0 .037-.076.075-.21.15a.98.98 0 01-.474.114c-.266 0-.513-.076-.722-.246-.228-.17-.341-.377-.341-.623 0-.038 0-.075.018-.132h-.094c-.342 0-.608-.076-.798-.227-.19-.15-.285-.34-.285-.547 0-.057.02-.076.038-.076 0 0 .02.038.02.095zm1.273.68c.094-.018.17-.018.208-.056.038-.038.076-.057.076-.076 0-.037-.019-.056-.076-.056-.076-.02-.152.056-.208.188zm3.456-5.987c-.02-.302-.095-.566-.285-.774a1.436 1.436 0 00-.646-.472h-.076c-.038 0-.057-.02-.076-.057h-.038l-.057.038c-.019 0-.038-.019-.076-.038h-.057c-.019.076-.056.114-.114.114-.056 0-.095-.038-.132-.114.018.02-.02.038-.038.038-.02 0-.038 0-.076-.019l-.02.019c0 .057-.037.094-.113.094l-.057-.018c-.437.226-.665.585-.665 1.076v.038c.36-.17.74-.265 1.101-.265.494 0 .969.114 1.425.34zm-2.184.548a.578.578 0 00-.095-.245 1.081 1.081 0 00-.247-.265c.019.17.057.302.114.397.057.094.114.15.19.15.019 0 .038 0 .038-.037zm1.025 5.628a1.3 1.3 0 00-.246-.396c-.095-.095-.19-.151-.247-.151-.038 0-.057.018-.057.056 0 .076.057.151.152.246.095.094.227.17.398.245zm.342-3.475a.539.539 0 00-.285-.075.527.527 0 00-.246.056c-.057.038-.095.076-.095.133 0 .056.037.094.132.094.171 0 .342-.076.494-.208z"></path>
                <path d="M17.238 19.68l.056.038c.38.189.551.529.551 1.02a.942.942 0 01-.133.472c-.095.17-.247.359-.456.585a4.167 4.167 0 00-.512.548l-.02-.038c.077-.113.115-.17.115-.208l-.057-.037a1.01 1.01 0 01-.532-.926c0-.208.057-.415.152-.623.095-.208.266-.416.494-.623.228-.208.398-.378.474-.51l.02.038c.018.037-.038.113-.152.264zm-.058 2.002c.096 0 .19-.076.247-.227a1.57 1.57 0 00.095-.547 1.07 1.07 0 00-.208-.624c-.134-.189-.266-.264-.38-.264-.076 0-.152.094-.21.264-.056.17-.075.36-.075.548 0 .245.057.453.152.604.095.151.228.246.38.246z"></path>
                <path d="M19.478 21.285v-.925c0-.038-.038-.076-.095-.132-.057-.057-.114-.095-.133-.095-.038 0-.095.038-.17.132l-.02-.018c0-.057.152-.208.437-.397.095-.076.19-.17.285-.321.019 0 .038.019.038.038 0 .018-.038.094-.133.226 0 .02.038.076.133.151.095.076.152.114.209.114l.133-.057.019.019c-.228.132-.323.208-.323.245v1.171c0 .057.038.114.095.17.076.057.114.076.152.076.038 0 .114-.057.209-.17l.019.038c0 .019-.076.113-.247.283-.171.17-.304.321-.418.472l-.019-.038c0-.018.02-.056.057-.094.038-.038.057-.076.057-.113l-.057-.076c-.152-.132-.209-.264-.209-.397v-.264a1.702 1.702 0 01-.418.472 3.718 3.718 0 00-.474.472c-.02 0-.038-.018-.038-.037 0-.02.019-.057.057-.095.038-.057.057-.075.057-.113 0-.057-.057-.132-.19-.208a.623.623 0 00-.247-.113c-.038 0-.076.019-.133.056l-.02-.018c0-.02.039-.057.096-.095.152-.075.228-.189.228-.34v-1.057a.23.23 0 00-.076-.17c-.057-.057-.095-.095-.114-.095-.057 0-.152.076-.266.208l-.02-.038c0-.057.096-.17.305-.359.209-.17.323-.264.342-.264l.019.038-.076.113.038.038c.152.075.209.189.209.302v1.34c0 .058.038.114.095.19a.232.232 0 00.19.094c.094.095.227-.056.417-.359z"></path>
                <path d="M21.738 21.682l.019.019c-.209.15-.38.302-.513.434s-.209.208-.228.208l-.019-.019c.076-.094.114-.151.114-.17 0-.057-.038-.132-.133-.227-.095-.094-.228-.15-.418-.15-.018 0-.075.037-.17.094-.02 0-.038-.02-.038-.038 0-.019.095-.075.265-.189a.804.804 0 01.418-.151c.076 0 .247.095.494.283.019 0 .057-.018.114-.056.038-.02.076-.038.095-.038zm-.988-1.945c0-.265.02-.454.076-.567.038-.113.152-.246.342-.378.171-.132.266-.189.285-.189l.019.038-.019.019a.75.75 0 00-.228.283c-.038.095-.057.246-.057.473v.32h.285c.038 0 .057.02.057.057 0 .038-.019.057-.057.057h-.285v.793c0 .416-.228.774-.665 1.039-.018.019-.056.038-.076.057l-.018-.02v-.037c.018 0 .056-.019.114-.057a.457.457 0 00.151-.207c.057-.095.076-.303.076-.586v-.982h-.209c-.038 0-.056-.019-.056-.057 0-.037.018-.056.056-.056h.21z"></path>
                <path d="M22.498 21.418c0 .075.019.15.076.226.057.076.114.114.17.114a.306.306 0 00.21-.095l.019.038c0 .019-.057.075-.19.189a4.42 4.42 0 00-.513.453l-.019-.019c0-.019.019-.057.057-.094.038-.038.057-.076.057-.095l-.057-.075a.527.527 0 01-.17-.36v-1.34c0-.057-.039-.095-.096-.132-.057-.038-.114-.076-.133-.076a.532.532 0 00-.152.095l-.019-.038c.342-.265.57-.453.665-.586l.038-.038c.019 0 .038.02.038.038 0 .02-.057.095-.171.227 0 .038.038.075.133.151.076.057.17.113.285.151-.133.057-.19.132-.19.189v1.076h-.038zm-.304-3.098c.057 0 .114.019.171.076a.23.23 0 01.076.17.23.23 0 01-.076.17c-.057.056-.095.075-.17.075-.077 0-.115-.019-.172-.075a.23.23 0 01-.076-.17.23.23 0 01.076-.17.233.233 0 01.171-.076z"></path>
                <path d="M24.34 21.474c-.057.076-.152.17-.285.302a1.464 1.464 0 01-.36.284c-.096.056-.21.17-.305.32-.019 0-.038-.018-.038-.037s.076-.113.21-.265l-.039-.037c-.285-.208-.437-.53-.437-.963 0-.473.323-.945.95-1.417a1.84 1.84 0 00.36-.321l.039.019-.21.226c.153.114.286.208.4.303.057.056.152.075.285.075l.038.02c0 .018-.02.037-.058.056-.132.075-.19.17-.19.32v2.248c0 .133.02.227.039.284.038.037.057.056.114.075.037 0 .056.02.056.038l-.056.019c-.171.056-.38.208-.627.453l-.076.076c-.02 0-.02 0-.02-.02l.039-.037a.554.554 0 00.17-.416v-1.605zm0-.113v-1.133c0-.057-.076-.114-.19-.208-.133-.095-.209-.132-.247-.132-.057 0-.133.094-.228.264-.114.17-.152.434-.152.793 0 .246.057.435.152.548.095.113.209.17.342.17.057 0 .114-.057.209-.151.076-.057.114-.113.114-.151z"></path>
                <path d="M26.562 21.285v-.925c0-.038-.038-.076-.095-.132-.057-.057-.114-.095-.133-.095-.038 0-.095.038-.171.132l-.02-.018c0-.057.153-.208.438-.397.095-.076.19-.17.285-.321.018 0 .038.019.038.038 0 .018-.038.094-.133.226 0 .02.038.076.133.151.095.076.151.114.208.114l.133-.057.02.019c-.229.132-.323.208-.323.245v1.171c0 .057.038.114.095.17.075.057.113.076.151.076.038 0 .114-.057.21-.17l.018.038c0 .019-.076.113-.247.283-.17.17-.303.321-.417.472l-.02-.038c0-.018.02-.056.058-.094.038-.038.057-.076.057-.113l-.057-.076c-.152-.132-.21-.264-.21-.397v-.264a1.702 1.702 0 01-.417.472 3.718 3.718 0 00-.475.472c-.019 0-.038-.018-.038-.037 0-.02.02-.057.057-.095.038-.057.057-.075.057-.113 0-.057-.057-.132-.19-.208a.623.623 0 00-.247-.113c-.038 0-.076.019-.133.056l-.019-.018c0-.02.038-.057.095-.095.152-.075.228-.189.228-.34v-1.057a.23.23 0 00-.076-.17c-.057-.057-.095-.095-.114-.095-.057 0-.152.076-.266.208l-.019-.038c0-.057.095-.17.304-.359.21-.17.323-.264.342-.264l.02.038-.077.113.038.038c.152.075.209.189.209.302v1.34c0 .058.038.114.095.19a.232.232 0 00.19.094c.095.095.228-.056.418-.359z"></path>
                <path d="M28.461 19.718l.076.056c.228.133.342.284.342.454a.56.56 0 01-.095.283c-.057.094-.171.227-.342.359-.17.132-.285.245-.342.34l-.019-.02c0-.056.057-.131.171-.245.114-.113.19-.189.209-.283a.5.5 0 00.057-.227.372.372 0 00-.114-.264c-.076-.076-.133-.113-.152-.113-.076 0-.152.075-.209.207-.057.133-.095.34-.095.605 0 .264.076.472.21.604a.675.675 0 00.455.208c.038 0 .114-.057.209-.17.019 0 .038.019.038.057 0 .075-.171.207-.494.415-.17.094-.266.17-.304.227-.038.056-.057.113-.076.17-.038 0-.057-.02-.057-.038 0-.095.057-.189.19-.302l-.057-.057c-.304-.208-.475-.51-.475-.925 0-.378.21-.775.627-1.19.133-.113.228-.246.285-.378.019 0 .038.019.038.038a.664.664 0 00-.076.189z"></path>
            </g>
        </svg>)
}

export default IconoBoutique